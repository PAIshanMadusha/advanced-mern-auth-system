import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  const clientDistPath = path.join(__dirname, "..", "client", "dist");

  app.use(express.static(clientDistPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(clientDistPath, "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
