import React from "react";
import DocumentsManager from "../components/DocumentsManager";

const DocumentsPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0D0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        color: "#E0E0E0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <header
        style={{
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#00FFAA",
            marginBottom: "0.5rem",
          }}
        >
          🔍 Sistema de RAG
        </h1>
        <p style={{ color: "#A0A0A0" }}>
          Envie, visualize e gerencie seus documentos para o sistema de busca e contexto inteligente.
        </p>
      </header>

      <div
        style={{
          width: "100%",
          maxWidth: 800,
        }}
      >
        <DocumentsManager />
      </div>
    </div>
  );
};

export default DocumentsPage;
