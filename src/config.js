import { config } from "dotenv";

config();

// ? Puerto de la app

export const PORT = process.env.PORT || 3000;

// ? URL de la base de datos

export const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";