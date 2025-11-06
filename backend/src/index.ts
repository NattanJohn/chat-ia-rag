import express from "express";
import cors from "cors";
import documentsRouter from "./routes/documents.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/documents", documentsRouter);

app.listen(3001, () => {
  console.log("✅ Backend rodando na porta 3001");
});
