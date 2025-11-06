import React, { useState, useEffect } from "react";
import { listDocuments, uploadDocument, deleteDocument } from "../services/api";

interface UploadedFile {
  name: string;
  size: number;
  date: string;
}

interface DocumentResponse {
  filename: string;
  size: number;
  uploadDate: string;
}

export const DocumentsManager: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const fetchDocuments = async () => {
  try {
    const docs: DocumentResponse[] = await listDocuments();

    const formatted = docs.map((doc) => ({
      name: doc.filename,
      size: doc.size || 0,
      date: new Date(doc.uploadDate).toLocaleString("pt-BR"),
    }));

    setFiles(formatted);
  } catch (err) {
    console.error("Erro ao listar documentos:", err);
  }
};

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const selected = e.target.files?.[0];
  if (!selected) return;

  const formData = new FormData();
  formData.append("file", selected);

  setUploading(true);
  try {
    const res = await uploadDocument(formData);
    console.log("Upload:", res);
    await fetchDocuments();
  } catch (err) {
    alert("Erro ao enviar o arquivo!");
    console.error(err);
  } finally {
    setUploading(false);
  }
};

  const handleDelete = async (filename: string) => {
  if (!window.confirm(`Tem certeza que deseja deletar "${filename}"?`)) return;

  try {
    await deleteDocument(filename);
    alert(`✅ Arquivo "${filename}" deletado com sucesso!`);
    await fetchDocuments();
  } catch (err) {
    console.error(err);
    alert(`❌ Erro ao deletar o arquivo "${filename}".`);
  }
};

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "3rem auto",
        padding: "2rem",
        backgroundColor: "#121212",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        color: "#E0E0E0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#00FFAA",
          marginBottom: "1.5rem",
        }}
      >
        📚 Gerenciador de Documentos
      </h2>

      <input
        type="file"
        accept=".pdf,.txt,.md"
        onChange={handleUpload}
        disabled={uploading}
        style={{
          display: "block",
          width: "100%",
          background: "#1E1E1E",
          color: "#E0E0E0",
          padding: "10px",
          borderRadius: 8,
          border: "1px solid #333",
          marginBottom: "1.5rem",
        }}
      />

      {uploading && <p>⏳ Enviando arquivo...</p>}

      {files.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {files.map((file) => (
            <li
              key={file.name}
              style={{
                background: "#1E1E1E",
                padding: "1rem",
                borderRadius: 8,
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong>{file.name}</strong>
                <p style={{ fontSize: "0.8rem", color: "#AAA" }}>
                  {(file.size / 1024).toFixed(1)} KB • {file.date}
                </p>
              </div>
              <button
                onClick={() => handleDelete(file.name)}
                style={{
                  background: "linear-gradient(90deg, #FF004C, #FF6600)",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#888" }}>
          Nenhum documento enviado ainda.
        </p>
      )}
    </div>
  );
};

export default DocumentsManager;
