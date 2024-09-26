import { Router } from "express";
import { getProductosDestacados } from "../Controladores/ProdDestacados.js";

const router = Router();

router.get("/destacados", getProductosDestacados);

export default router;
