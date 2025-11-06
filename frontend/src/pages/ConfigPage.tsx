import React from "react";
import ConfigForm from "../components/ConfigForm";

const ConfigPage: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Painel de Configurações</h1>
      <ConfigForm />
    </div>
  );
};

export default ConfigPage;
