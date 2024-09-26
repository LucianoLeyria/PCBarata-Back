let id = 1;

const productosDestacados = [
  {
    id: id++,
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
  },
  {
    id: id++,
    nombre: "Asus ROG Zephyrus G14",
    precio: "$800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
  },
  {
    id: id++,
    nombre: "Gigabyte AORUS B450 Elite",
    precio: "$105.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
  },
  {
    id: id++,
    nombre: "Intel Core i7-11700F",
    precio: "$180.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
  },
  {
    id: id++,
    nombre: "Kingston HyperX Fury 16GB DDR4",
    precio: "$40.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
  },
  {
    id: id++,
    nombre: "Crucial P2 500GB NVMe",
    precio: "$48.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
  },
  {
    id: id++,
    nombre: "Cooler Master Hyper 212",
    precio: "$35.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
  },
  {
    id: id++,
    nombre: "Cooler Master MasterBox Q300L",
    precio: "$30.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
  },
  {
    id: id++,
    nombre: "Thermaltake Smart RGB 700W",
    precio: "$40.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_641811-MLA75192411373_032024-O.webp",
    categoria: "fuentes",
  },
  {
    id: id++,
    nombre: "Samsung Odyssey G7 32''",
    precio: "$250.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_608271-MLM74085807279_012024-O.webp",
    categoria: "monitores",
  },
  {
    id: id++,
    nombre: "SteelSeries Arctis 7",
    precio: "$30.000",
    img: "https://electrogamer.com.ar/wp-content/uploads/2021/04/D_NQ_NP_830757-MLA44060936094_112020-O.jpg",
    categoria: "perifericos",
  },
  {
    id: id++,
    nombre: "Secretlab Omega 2020",
    precio: "$150.000",
    img: "https://www.mink.com.ar/qloud/ryr/fotos/21538-0.jpg",
    categoria: "sillas",
  },
  {
    id: id++,
    nombre: "Netgear Nighthawk AX8",
    precio: "$70.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_936497-MLA43803953244_102020-O.webp",
    categoria: "conectividad",
  },
];

export const getProductosDestacados = (req, res) => {
  try {
    res.status(200).json(productosDestacados);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
