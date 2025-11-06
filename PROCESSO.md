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

---


## 🔹 Etapa 4 - RAG: Sistema de Documentos (Início)
**Commit:**
[AI] Setup routing and create DocumentsPage  
Prompt: Add React Router setup and create a DocumentsPage component for managing RAG documents

Nesta etapa foi configurado o roteamento com `react-router-dom` e criada a página `DocumentsPage`.
O próximo passo será implementar o sistema de upload e listagem de arquivos (PDF, TXT, MD),
que fará parte do módulo de RAG.

---

## 🔹 Etapa 5 — Backend: Upload, Listagem e Exclusão de Documentos
**Commit:** `[AI] Implement Express routes for RAG document management`  
**Prompt:** “Create Express routes using multer for uploading PDF, TXT, and MD files, with support for listing and deleting files.”

Nesta etapa foi implementado o backend do módulo de RAG, incluindo:
- Criação das rotas em **Express** para upload, listagem e exclusão de documentos.  
- Utilização do **multer** para gerenciamento dos uploads.  
- Funções utilitárias em `utils/fileHandler.ts` para leitura e exclusão segura dos arquivos.  
- Estrutura pronta para futura integração com o frontend e expansão para o sistema RAG completo.