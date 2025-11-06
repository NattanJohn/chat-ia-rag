# 🧠 PROCESSO DE DESENVOLVIMENTO

## 🔹 Etapa 1 — Estrutura Inicial do Projeto  
Iniciado o projeto com as pastas **frontend** e **backend**, ambas configuradas com TypeScript.  
Configurados o `tsconfig.json`, `package.json` e scripts para execução com `nodemon` no backend.  
Criado o repositório **chat-ia-rag** no GitHub e ajustadas as branches (usando `main` como padrão).  
Adicionados os arquivos iniciais `.gitignore`, `README.md` e `PROCESSO.md`.  

---

## 🔹 Etapa 2 — Criação do Painel de Configurações  
**Commit:** `[AI] Create ConfigForm component`  
**Prompt:** “Implement a configuration form with API key, model selector, and system prompt using React + TypeScript + localStorage.”

Foi criado o componente **ConfigForm** em React, contendo:
- Campo para **API Key** da OpenRouter  
- **Seletor de modelo** (GPT-4, Claude, Llama)  
- Campo editável de **System Prompt**  
- Salvamento das configurações via `localStorage`

O objetivo foi construir a base funcional do painel de configurações, garantindo persistência local das informações.

---

## 🔹 Etapa 3 — Redesign Manual (Dark Mode)  
**Commit:** `[MANUAL] Adjust dark mode layout and prepare for future responsive refinements`

Aplicado um **redesign completo** no componente de configurações:
- Implementado tema **dark mode** com gradiente e tipografia moderna.  
- Layout centralizado, espaçamento ajustado e cores mais contrastantes.  
- Início da **responsividade**, a ser aprimorada em commits futuros. 