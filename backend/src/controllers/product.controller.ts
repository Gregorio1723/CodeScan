import type { Request, Response } from "express";
import { getProductByBarcode } from "../services/product.service.js";

export async function findProductByBarcode(
  req: Request,
  res: Response,
) {
  try {
    const codigo = Array.isArray(req.params.codigo)
      ? req.params.codigo[0]
      : req.params.codigo;

    if (!codigo) {
      return res.status(400).json({
        status: "error",
        message: "El código de barras es obligatorio",
      });
    }

    const product = await getProductByBarcode(codigo);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }

    return res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error("Error buscando producto:", error);

    return res.status(500).json({
      status: "error",
      message: "Error interno del servidor",
    });
  }
}