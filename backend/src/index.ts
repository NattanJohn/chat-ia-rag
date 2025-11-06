import express from "express";
import cors from "cors";
import documentsRouter from "./routes/documents.js";
import whatsappRouter from "./routes/whatsapp.js";
import { connectInstance, createInstance } from "./service/evo.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/documents", documentsRouter);
app.use("/api/whatsapp", whatsappRouter);

app.listen(3001, () => {
  console.log("✅ Backend rodando na porta 3001");

   createInstance();
   connectInstance();
});
