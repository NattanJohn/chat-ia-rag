import React, { useState, useEffect } from "react";

export const ConfigForm: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("gpt-4");
  const [systemPrompt, setSystemPrompt] = useState("");

  useEffect(() => {
    const savedApiKey = localStorage.getItem("openrouter_api_key") || "";
    const savedModel = localStorage.getItem("model") || "gpt-4";
    const savedPrompt = localStorage.getItem("system_prompt") || "";

    setApiKey(savedApiKey);
    setModel(savedModel);
    setSystemPrompt(savedPrompt);
  }, []);

  const handleSave = () => {
    localStorage.setItem("openrouter_api_key", apiKey);
    localStorage.setItem("model", model);
    localStorage.setItem("system_prompt", systemPrompt);
    alert("Configurações salvas com sucesso!");
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "3rem auto",
        padding: "2rem",
        backgroundColor: "#121212",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        color: "#E0E0E0",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#00FFAA", marginBottom: "1.5rem" }}>
        ⚙️ Painel de Configurações
      </h2>

      <label style={{ display: "block", marginTop: 16 }}>API Key da OpenRouter:</label>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Cole sua API Key aqui"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#1E1E1E",
          border: "1px solid #333",
          color: "#E0E0E0",
          marginTop: 6,
        }}
      />

      <label style={{ display: "block", marginTop: 16 }}>Modelo:</label>
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#1E1E1E",
          border: "1px solid #333",
          color: "#E0E0E0",
          marginTop: 6,
        }}
      >
        <option value="gpt-4">GPT-4</option>
        <option value="claude-3">Claude 3</option>
        <option value="llama-3">Llama 3</option>
      </select>

      <label style={{ display: "block", marginTop: 16 }}>System Prompt:</label>
      <textarea
        value={systemPrompt}
        onChange={(e) => setSystemPrompt(e.target.value)}
        rows={4}
        placeholder="Escreva aqui o prompt padrão do sistema..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#1E1E1E",
          border: "1px solid #333",
          color: "#E0E0E0",
          marginTop: 6,
        }}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: 24,
          width: "100%",
          padding: "12px",
          background: "linear-gradient(90deg, #00FFAA, #0077FF)",
          color: "#121212",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.opacity = "0.85")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.opacity = "1")
        }
      >
        Salvar Configurações
      </button>
    </div>
  );
};

export default ConfigForm;
