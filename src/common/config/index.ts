import { Config } from "../../types";

const API_URL = import.meta.env.VITE_API_URL;

const config: Config = {
  apiUrl: API_URL,
} as const;

export default config;