import { Sequelize } from "sequelize";
import { crearTablaProductos } from "../Modelos/Productos.js";

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(
  "railway",
  "root",
  "dSiNCGbzxCTtJlqXCnPfOTNIaBXcdxaP",
  {
    host: "autorack.proxy.rlwy.net",
    dialect: "mysql",
    port: "43178",
  }
);

crearTablaProductos(sequelize);
