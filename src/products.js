const products = [
  {
    id: 0,
    categoryId: 1,
    name: "Correa 2mt",
    price: 2000,
    stock: 15,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_990581-MLA50663579498_072022-O.webp",
  },
  {
    id: 1,
    categoryId: 1,
    name: "Correa Canicross P/ Perro, + Cinturon, Elastizada, 2mts K9",
    price: 2000,
    stock: 8,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_877006-MLA45142618935_032021-O.webp",
  },
  {
    id: 2,
    categoryId: 1,
    name: "Correa Larga 10 Metros Reforzada Paseo Adiestramiento Perros",
    price: 2000,
    stock: 15,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_753016-MLA43523957007_092020-O.webp",
  },

  {
    id: 3,
    categoryId: 2,
    name: "Collar De Intervención K9 Adiestramiento Canino",
    price: 3600,
    stock: 4,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_948267-MLA43691111922_102020-O.webp",
  },
  {
    id: 4,
    categoryId: 2,
    name: "Collar Rápido Para Perro Regulable Paseo Identificatorio",
    price: 900,
    stock: 16,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_792727-MLA43971156607_112020-O.webp",
  },
  {
    id: 5,
    categoryId: 2,
    name: "Collar Luz Led Para Perros Gatos Ajustable Con 3 Modos Luz",
    price: 600,
    stock: 6,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_957026-MLA49470644733_032022-O.webp",
  },
  {
    id: 6,
    categoryId: 2,
    name: "Arnés H Paseo Viajes Anti-tirón Regulable Doble Enganche",
    price: 3000,
    stock: 5,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_830681-MLA48454692285_122021-O.webp",
  },

  {
    id: 7,
    categoryId: 3,
    name: "Juguete Soga Dos Nudos Gigante 55cm",
    price: 880,
    stock: 16,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_711402-MLA46846116115_072021-O.webp",
  },
  {
    id: 8,
    categoryId: 3,
    name: "Pelota De Goma Caucho Maciza Para Perros 7.5 Cm X 3 Unidades",
    price: 1300,
    stock: 8,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_878362-MLA50789407342_072022-O.webp",
  },
  {
    id: 9,
    categoryId: 3,
    name: "Juguete Perros Mordillo Dental Multicolor Masajeador Encías",
    price: 750,
    stock: 10,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_974106-MLA43881477308_102020-O.webp",
  },

  {
    id: 10,
    categoryId: 4,
    name: "Alimento Sieger Super Premium ",
    price: 8500,
    stock: 7,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_733120-MLA50131748752_052022-F.webp",
  },
  {
    id: 11,
    categoryId: 4,
    name: "Alimento Agility Premium para perro adulto",
    price: 5700,
    stock: 4,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_995500-MLA50207974187_062022-O.webp",
  },
  {
    id: 12,
    categoryId: 4,
    name: "Balanceado Premium",
    price: 7000,
    stock: 5,
    description:
      "Acá va el detalle del producto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error corporis aliquam voluptates, totam saepe sapiente id magnam distinctio possimus ipsam, itaque sequi rem est reprehenderit? Aut voluptas qui error.",
    img: "https://http2.mlstatic.com/D_NQ_NP_717513-MLA46542019198_062021-O.webp",
  },
];

export default products;
