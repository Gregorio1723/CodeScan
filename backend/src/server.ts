import express from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "CodeScan API funcionando correctamente",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 CodeScan API ejecutándose en http://localhost:${PORT}`);
});