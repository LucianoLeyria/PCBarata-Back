import { sequelize } from "../DB/Sequelize.js";
import { Sequelize } from "sequelize";

const Productos = sequelize.models.Productos;

export const getProductosDestacados = async (req, res) => {
  try {
    const productosDestacados = await Productos.findAll({
      where: {
        destacado: true, // Filtra por destacado = true
      },
    });
    res.status(200).json(productosDestacados);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const getProductosGenerales = async (req, res) => {
  try {
    const { categoria, orden, nombre, paginaActual, cantidadPorPag } =
      req.query;
    const filtros = {};

    if (categoria) {
      filtros.categoria = categoria;
    }

    // Filtro por coincidencia parcial en el nombre
    if (nombre) {
      filtros.nombre = {
        [Sequelize.Op.like]: `%${nombre}%`, // Coincidencia parcial, buscando en cualquier parte del nombre
      };
    }

    let order = [];

    if (orden) {
      const [campo, direccion] = orden.split("_");
      if (campo === "precio") {
        // Si es el campo 'precio', lo convertimos a número quitando el símbolo $ y los puntos
        order.push([
          Sequelize.literal(
            `CAST(REPLACE(REPLACE(precio, '$', ''), '.', '') AS UNSIGNED)`
          ),
          direccion,
        ]);
      } else {
        // Orden normal para otros campos
        order.push([campo, direccion]);
      }
    }

    // Calcula el offset
    const page = parseInt(paginaActual); // Asegúrate de que sea un número
    const limit = parseInt(cantidadPorPag); // Valor por defecto si no se proporciona
    const offset = (page - 1) * limit;

    // Cuenta el total de productos que coinciden con los filtros
    const totalProductos = await Productos.count({
      where: filtros,
    });

    // Obtiene los productos de acuerdo a la paginación
    const productosGenerales = await Productos.findAll({
      where: filtros,
      order: order.length > 0 ? order : undefined,
      offset: offset,
      limit: limit,
    });

    // Envia los productos y la información de paginación al frontend
    res.status(200).json({
      productos: productosGenerales,
      totalProductos,
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
