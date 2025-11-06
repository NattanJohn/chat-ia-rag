import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const listDocuments = async () => {
  const response = await api.get("/documents");
  return response.data;
};

export const uploadDocument = async (formData: FormData) => {
  const response = await api.post("/documents/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteDocument = async (filename: string) => {
  const response = await api.delete(`/documents/${filename}`);
  return response.data;
};

export default api;
