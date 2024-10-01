import { Router } from "express";
import {
  getProductosDestacados,
  getProductosGenerales,
} from "../Controladores/Productos.js";

const router = Router();

router.get("/destacados", getProductosDestacados);
router.get("/generales", getProductosGenerales);

export default router;
