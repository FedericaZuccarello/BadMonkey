import { ARMA, COLOR, INSTOCK, LEVEL } from "../../type";

const pistoleData = [
  {
    code: "F-000",
    img: "https://i.ibb.co/7CX5Zdv/F-000-0.jpg",
    imgs: [
      "https://i.ibb.co/kxNfKxm/F-000-5.jpg",
      "https://i.ibb.co/8sXMxwy/F-000-6.jpg",
      "https://i.ibb.co/kXxMsVZ/F-000-1.jpg",
      "https://i.ibb.co/df7v7sQ/F-000-2.jpg",
      "https://i.ibb.co/7CX5Zdv/F-000-0.jpg",
      "https://i.ibb.co/nnYYdSR/F-000-4.jpg",
      "https://i.ibb.co/hYtdYMg/F-000-3.jpg",
    ],
    title: "CM.076A Full Metal [CYMA]",
    type: ARMA.FUCILE,
    level: LEVEL.FASCIA_BASSA,
    colour: COLOR.BLACK,
    price: 240,
    description: "Descrizione",
    fullDescription: "Full descrizione",
    inStock: INSTOCK.Si,
    variante: null,
  },
];
export default pistoleData;
