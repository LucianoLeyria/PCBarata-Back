import { DataTypes } from "sequelize";

export const crearTablaProductos = (sequelize) => {
  const Productos = sequelize.define(
    "Productos",
    {
      // Model attributes are defined here
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destacado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      tienda: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
    }
  );

  // `sequelize.define` also returns the model
};
