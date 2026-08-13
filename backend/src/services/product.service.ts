import pool from "../config/database.js";

export async function getProductByBarcode(barcode: string) {
  const result = await pool.query(
    `
      SELECT
        id,
        codigo_barras,
        nombre,
        marca,
        categoria,
        precio,
        stock,
        imagen,
        descripcion,
        created_at,
        updated_at
      FROM productos
      WHERE codigo_barras = $1
    `,
    [barcode],
  );

  return result.rows[0] ?? null;
}