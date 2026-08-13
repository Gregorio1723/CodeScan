import { Router } from "express";
import { findProductByBarcode } from "../controllers/product.controller.js";

const router = Router();

router.get(
  "/barcode/:codigo",
  findProductByBarcode,
);

export default router;