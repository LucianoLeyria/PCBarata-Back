import express from "express";
import routerProdDestacados from "./Rutas/ProdDestacados.js";
import cors from "cors";
import morgan from "morgan";
import "./DB/Sequelize.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/productos/", routerProdDestacados);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server corriendo en port ${port}`);
});
