
import express, { Request, Response } from "express";
import { sendMessage } from "../service/evo.js";

const router = express.Router();

router.post("/webhook", async (req: Request, res: Response) => {
  const { from, message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem vazia" });

  console.log("📨 Mensagem recebida de", from, ":", message);

  const ragContext = "Documentos carregados: manual.pdf, guia.txt";
  const prompt = `Contexto: ${ragContext}\nUsuário: ${message}\nResponda de forma breve e objetiva, como assistente.`;

  const reply = `🤖 Resposta simulada: ${prompt}`;

  await sendMessage(from, reply);

  return res.json({ reply });
});

export default router;
