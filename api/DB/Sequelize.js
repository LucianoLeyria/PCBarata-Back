import { Sequelize } from "sequelize";

try {
  // Option 3: Passing parameters separately (other dialects)
  const sequelize = new Sequelize("pcbarata", "Lucho", "pcbarata", {
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3306",
  });

  await sequelize.authenticate();
  console.log("DB andandooo");
} catch (e) {
  console.error("Problema en la DB:", error);
}
