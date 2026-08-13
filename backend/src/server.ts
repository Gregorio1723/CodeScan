import express from "express";
import cors from "cors";
import pool from "./config/database.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "ok",
      message: "CodeScan API funcionando correctamente",
      database: "connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Error de conexión con PostgreSQL:", error);

    res.status(500).json({
      status: "error",
      message: "No se pudo conectar con PostgreSQL",
    });
  }
});

app.use("/api/productos", productRoutes);

app.listen(PORT, () => {
  console.log(
    `🚀 CodeScan API ejecutándose en http://localhost:${PORT}`,
  );
});