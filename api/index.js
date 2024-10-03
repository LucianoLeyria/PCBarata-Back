import express from "express";
import routerProductos from "./Rutas/ProductosRuta.js";
import cors from "cors";
import morgan from "morgan";
import "./DB/Sequelize.js";
import { sequelize } from "./DB/Sequelize.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/productos/", routerProductos);

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Server corriendo en port ${port}`);
  try {
    await sequelize.sync({ force: true });
    console.log("Conexion exitosa");
  } catch (e) {
    console.log("Conexion fallida", e.message);
  }
});
