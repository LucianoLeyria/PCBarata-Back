import { sequelize } from "../DB/Sequelize.js";

const productosArray = [
  {
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "MSI GeForce RTX 3080",
    precio: "$450.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "ASUS TUF Radeon RX 6800",
    precio: "$420.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Asus ROG Zephyrus G14",
    precio: "$800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: true,
  },
  {
    nombre: "Dell XPS 13",
    precio: "$700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "HP Omen 15",
    precio: "$850.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Gigabyte AORUS B450 Elite",
    precio: "$105.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "MSI B550 Gaming Plus",
    precio: "$115.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Asus Prime B560M-A",
    precio: "$120.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Intel Core i7-11700F",
    precio: "$180.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "AMD Ryzen 9 5900X",
    precio: "$200.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Intel Core i5-12600K",
    precio: "$160.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Kingston HyperX Fury 16GB DDR4",
    precio: "$40.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Corsair Vengeance 32GB DDR4",
    precio: "$60.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "G.Skill Trident Z 16GB DDR4",
    precio: "$50.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Crucial P2 500GB NVMe",
    precio: "$48.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: true,
  },
  {
    nombre: "Samsung 980 Pro 1TB",
    precio: "$75.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "WD Black SN750 500GB",
    precio: "$65.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Cooler Master Hyper 212",
    precio: "$35.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Noctua NH-D15",
    precio: "$80.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Be Quiet! Dark Rock Pro 4",
    precio: "$90.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Cooler Master MasterBox Q300L",
    precio: "$30.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "NZXT H510",
    precio: "$55.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Corsair 4000D Airflow",
    precio: "$60.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Thermaltake Smart RGB 700W",
    precio: "$40.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_641811-MLA75192411373_072022-W.jpg",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Corsair RM750x",
    precio: "$90.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_641811-MLA75192411373_072022-W.jpg",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "EVGA 600 W1",
    precio: "$50.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_641811-MLA75192411373_072022-W.jpg",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Lenovo ThinkPad X1 Carbon",
    precio: "$1.200.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Apple MacBook Pro 14",
    precio: "$1.800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "HP Spectre x360",
    precio: "$1.500.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Acer Swift 3",
    precio: "$800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Asus ZenBook 14",
    precio: "$1.000.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Dell Inspiron 15",
    precio: "$700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Microsoft Surface Laptop 4",
    precio: "$1.200.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Razer Blade 15",
    precio: "$2.000.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "HP Pavilion 15",
    precio: "$850.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Samsung Galaxy Book Pro",
    precio: "$1.100.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Lenovo IdeaPad 5",
    precio: "$900.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Asus VivoBook 15",
    precio: "$750.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Toshiba Dynabook Tecra",
    precio: "$950.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "HP Envy x360",
    precio: "$1.300.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Dell Latitude 7420",
    precio: "$1.400.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Acer Predator Helios 300",
    precio: "$1.600.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Apple MacBook Air M1",
    precio: "$1.500.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "LG Gram 17",
    precio: "$1.900.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
  {
    nombre: "Huawei MateBook X Pro",
    precio: "$1.700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
  },
];

try {
  await sequelize.models.Productos.bulkCreate(productosArray);
  console.log("Se crearon los registros correctamente con bulkCreate");
} catch (e) {
  console.log("Falló el bulkCreate:", e.message);
}
