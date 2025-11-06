import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";        
import { dirname } from "path";               

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

router.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "Nenhum arquivo enviado" });

  res.json({
  message: "Upload realizado com sucesso!",
  file: {
    originalName: req.file.originalname,
    savedName: req.file.filename, // nome real salvo no disco
    size: req.file.size,
    uploadDate: new Date(),
  },
});
});

router.get("/", (_: Request, res: Response) => {
  const files = fs.readdirSync(uploadDir).map((file) => {
    const stats = fs.statSync(path.join(uploadDir, file));
    return {
      filename: file,
      size: stats.size,
      uploadDate: stats.birthtime,
    };
  });

  res.json(files);
});

router.delete("/:filename", (req: Request, res: Response) => {
  const filePath = path.join(uploadDir, req.params.filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Arquivo não encontrado" });
  }

  try {
    fs.unlinkSync(filePath);
    res.json({ message: "Arquivo deletado com sucesso!" });
  } catch (err) {
    console.error("Erro ao deletar arquivo:", err);
    res.status(500).json({ error: "Erro ao deletar arquivo" });
  }
});

export default router;
