import { useNavigate } from "react-router-dom";
import { ConfigForm } from "../components/ConfigForm";

export default function ConfigPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <ConfigForm />

      <button
        onClick={() => navigate("/documents")}
        style={{
          marginTop: "1.5rem",
          padding: "10px 16px",
          background: "linear-gradient(90deg, #00FFAA, #0077FF)",
          color: "#121212",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Ir para Documentos
      </button>
    </div>
  );
}
