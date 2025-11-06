import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://evodevs.cordex.ai";
const EVO_API_KEY = 'V0e3EBKbaJFnKREYfFCqOnoi904vAPV7';
export const INSTANCE_NAME = process.env.INSTANCE_NAME || "MeuBotGPT2";
export let INSTANCE_ID = "";

interface CreateInstanceResponse {
  instance: {
    id: string;
    name: string;
    [key: string]: any;
  };
}

export async function createInstance() {
  try {
    const res = await axios.post<CreateInstanceResponse>(
      `${BASE_URL}/instance/create`,
      {
        instanceName: INSTANCE_NAME,
        integration: "WHATSAPP-BAILEYS",
        qrcode: true,
      },
      { headers: { apikey: EVO_API_KEY } }
    );

    INSTANCE_ID = res.data.instance.id;
    console.log("✅ Instância criada:", INSTANCE_ID);
  } catch (err: any) {
    console.error(
      "❌ Erro ao criar instância:",
      err.response?.data || err.message
    );
  }
}

export async function connectInstance() {
  if (!INSTANCE_ID) return;
  try {
    const res = await axios.get(`${BASE_URL}/instance/connect/${INSTANCE_ID}`, {
      headers: { apikey: EVO_API_KEY },
    });
    console.log("✅ Instância conectada:", res.data);
  } catch (err: any) {
    console.error(
      "❌ Erro ao conectar instância:",
      err.response?.data || err.message
    );
  }
}

export async function sendMessage(to: string, text: string) {
  if (!INSTANCE_ID) return;
  try {
    await axios.post(
      `${BASE_URL}/message/sendText/${INSTANCE_ID}`,
      {
        number: to,
        text,
        delay: 0,
      },
      { headers: { apikey: EVO_API_KEY } }
    );
    console.log("✅ Mensagem enviada para", to);
  } catch (err: any) {
    console.error(
      "❌ Erro ao enviar mensagem:",
      err.response?.data || err.message
    );
  }
}
