import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export const SESSION_SECRET = process.env["SESSION_SECRET"];
