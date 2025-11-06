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
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Poppins" }}>
      <h2>Painel de Configurações</h2>

      <label style={{ display: "block", marginTop: 16 }}>API Key da OpenRouter:</label>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        style={{ width: "100%", padding: 8 }}
        placeholder="Cole sua API Key aqui"
      />

      <label style={{ display: "block", marginTop: 16 }}>Modelo:</label>
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ width: "100%", padding: 8 }}
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
        style={{ width: "100%", padding: 8 }}
        placeholder="Escreva aqui o prompt padrão do sistema..."
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: 20,
          padding: "10px 16px",
          background: "#329369",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Salvar Configurações
      </button>
    </div>
  );
};

export default ConfigForm;
