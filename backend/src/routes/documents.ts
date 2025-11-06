import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { pool } from "../db.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "Nenhum arquivo enviado" });

  const { filename, originalname, size } = req.file;
  const filePath = path.join(uploadDir, filename);

  try {
    const result = await pool.query(
      `INSERT INTO documents (filename, original_name, size, path, upload_date)
       VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
      [filename, originalname, size, filePath]
    );

    res.json({ message: "Upload realizado com sucesso!", file: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar no banco de dados" });
  }
});

router.get("/", async (_: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM documents ORDER BY upload_date DESC`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar documentos" });
  }
});

router.delete("/:filename", async (req: Request, res: Response) => {
  const { filename } = req.params;

  try {
    const result = await pool.query(`SELECT path FROM documents WHERE filename = $1`, [filename]);
    if (result.rowCount === 0) return res.status(404).json({ error: "Arquivo não encontrado" });

    const filePath = result.rows[0].path;

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await pool.query(`DELETE FROM documents WHERE filename = $1`, [filename]);

    res.json({ message: "Arquivo deletado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar arquivo" });
  }
});

export default router;
