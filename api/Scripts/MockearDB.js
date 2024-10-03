import { sequelize } from "../DB/Sequelize.js";

const productosArray = [
  {
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "MSI GeForce RTX 3080",
    precio: "$450.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "ASUS TUF Radeon RX 6800",
    precio: "$420.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Asus ROG Zephyrus G14",
    precio: "$800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: true,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Dell XPS 13",
    precio: "$700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "HP Omen 15",
    precio: "$850.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Gigabyte AORUS B450 Elite",
    precio: "$105.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "MSI B550 Gaming Plus",
    precio: "$115.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Asus Prime B560M-A",
    precio: "$120.000",
    img: "https://mla-s1-p.mlstatic.com/696203-MLU69905336919_062023-F.jpg",
    categoria: "mother",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Intel Core i7-11700F",
    precio: "$180.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "AMD Ryzen 9 5900X",
    precio: "$200.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Intel Core i5-12600K",
    precio: "$160.000",
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000263BOX.jpg",
    categoria: "procesadores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Kingston HyperX Fury 16GB DDR4",
    precio: "$40.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Corsair Vengeance 32GB DDR4",
    precio: "$60.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "G.Skill Trident Z 16GB DDR4",
    precio: "$50.000",
    img: "https://i0.wp.com/elprofealegria.com/wp-content/uploads/2021/01/Memoria-RAM.jpg?resize=673%2C421&ssl=1",
    categoria: "ram",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Crucial P2 500GB NVMe",
    precio: "$48.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: true,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Samsung 980 Pro 1TB",
    precio: "$75.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "WD Black SN750 500GB",
    precio: "$65.000",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-1058-producto-disco-estado-solido-ssd-240gb-25-sata-3-wd-green-519.jpg",
    categoria: "almacenamiento",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Cooler Master Hyper 212",
    precio: "$35.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Noctua NH-D15",
    precio: "$80.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Be Quiet! Dark Rock Pro 4",
    precio: "$90.000",
    img: "https://mla-s1-p.mlstatic.com/979854-MLA69947875858_062023-F.jpg",
    categoria: "refrigeracion",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Cooler Master MasterBox Q300L",
    precio: "$30.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "NZXT H510",
    precio: "$55.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Corsair 4000D Airflow",
    precio: "$60.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Thermaltake Smart RGB 700W",
    precio: "$40.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Corsair RM750x",
    precio: "$90.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "EVGA 600 W1",
    precio: "$50.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Lenovo ThinkPad X1 Carbon",
    precio: "$1.200.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Apple MacBook Pro 14",
    precio: "$1.800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "HP Spectre x360",
    precio: "$1.500.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Acer Swift 3",
    precio: "$800.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Asus ZenBook 14",
    precio: "$1.000.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Dell Inspiron 15",
    precio: "$700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Microsoft Surface Laptop 4",
    precio: "$1.200.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Razer Blade 15",
    precio: "$2.000.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "HP Pavilion 15",
    precio: "$850.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Samsung Galaxy Book Pro",
    precio: "$1.100.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Lenovo IdeaPad 5",
    precio: "$900.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Asus VivoBook 15",
    precio: "$750.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Toshiba Dynabook Tecra",
    precio: "$950.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "HP Envy x360",
    precio: "$1.300.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Dell Latitude 7420",
    precio: "$1.400.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Acer Predator Helios 300",
    precio: "$1.600.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Apple MacBook Air M1",
    precio: "$1.500.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "LG Gram 17",
    precio: "$1.900.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Huawei MateBook X Pro",
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
    precio: "$1.700.000",
    img: "https://www.xtr.com.ar/img/p/11411/bdf342dda03e484cb2cc7731f607ee6d.jpeg?quality=95&width=800&height=800&mode=max&upscale=false",
    categoria: "notebooks",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Radeon RX 6900 XT XFX",
    precio: "$499.999",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "MSI GeForce RTX 3080",
    precio: "$450.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "ASUS TUF Radeon RX 6800",
    precio: "$420.000",
    img: "https://spacegamer.com.ar/img/Public/1058/producto-1-4134.jpg",
    categoria: "placas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  // Otros productos originales también siguen el mismo patrón...

  // Nuevos productos para las categorías solicitadas
  {
    nombre: "TP-Link Archer AX50",
    precio: "$32.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDjwyCLhYl14v_i4T6lQmMnciMvsVoNa9_g&s",
    categoria: "conectividad",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Netgear Nighthawk R7000",
    precio: "$50.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDjwyCLhYl14v_i4T6lQmMnciMvsVoNa9_g&s",
    categoria: "conectividad",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Linksys Velop MX10",
    precio: "$80.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDjwyCLhYl14v_i4T6lQmMnciMvsVoNa9_g&s",
    categoria: "conectividad",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Silla Gamer Corsair T3",
    precio: "$100.000",
    img: "https://www.perozzi.com.ar/46727-large_default/daihatsu-silla-gamer-d-ga20rd.jpg",
    categoria: "sillas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Silla Redragon Hades",
    precio: "$85.000",
    img: "https://www.perozzi.com.ar/46727-large_default/daihatsu-silla-gamer-d-ga20rd.jpg",
    categoria: "sillas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Silla Cooler Master Caliber X1",
    precio: "$120.000",
    img: "https://www.perozzi.com.ar/46727-large_default/daihatsu-silla-gamer-d-ga20rd.jpg",
    categoria: "sillas",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Teclado Mecánico HyperX Alloy FPS",
    precio: "$25.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_637791-MLU71846648318_092023-O.webp",
    categoria: "perifericos",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Mouse Logitech G502 Hero",
    precio: "$18.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_637791-MLU71846648318_092023-O.webp",
    categoria: "perifericos",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Auriculares Razer Kraken X",
    precio: "$12.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_637791-MLU71846648318_092023-O.webp",
    categoria: "perifericos",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Monitor LG UltraGear 27GL850",
    precio: "$220.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_608271-MLM74085807279_012024-O.webp",
    categoria: "monitores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Monitor Samsung Odyssey G7",
    precio: "$240.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_608271-MLM74085807279_012024-O.webp",
    categoria: "monitores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Monitor AOC Agon AG493UCX",
    precio: "$300.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_608271-MLM74085807279_012024-O.webp",
    categoria: "monitores",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Fuente EVGA SuperNOVA 750 G5",
    precio: "$75.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Fuente Corsair RM850x",
    precio: "$100.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Fuente Thermaltake Toughpower GF1",
    precio: "$85.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_871323-MLA75192411235_032024-O.webp",
    categoria: "fuentes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Gabinete Phanteks Eclipse P500A",
    precio: "$70.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Gabinete Lian Li PC-O11 Dynamic",
    precio: "$120.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
  {
    nombre: "Gabinete NZXT H710i",
    precio: "$150.000",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/GAMER016/1000x1000-GAMER016.jpg&h=400&q=100",
    categoria: "gabinetes",
    destacado: Math.random() < 0.5,
    tienda: ["compragamer", "gezatek", "fullhard"][
      Math.floor(Math.random() * 3)
    ],
  },
];

try {
  await sequelize.models.Productos.bulkCreate(productosArray);
  console.log("Se crearon los registros correctamente con bulkCreate");
} catch (e) {
  console.log("Falló el bulkCreate:", e.message);
}
