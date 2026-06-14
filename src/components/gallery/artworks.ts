import type { Artwork } from "./types";

const R2 = "https://pub-b2687d885eb148ad8c4cb04ca92a78ad.r2.dev";

export const artworks: Artwork[] = [
  // Charcoal
  {
    id: "jarra",
    images: [
      { src: `${R2}/artwork/charcoal/jug-study/01.jpg`, alt: "Charcoal still life of a jug" },
      { src: `${R2}/artwork/charcoal/jug-study/02.jpg`, alt: "Charcoal still life of a jug on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "jarra",
  },
  {
    id: "busto",
    images: [
      { src: `${R2}/artwork/charcoal/classical-bust/01.jpg`, alt: "Classical bust study in charcoal" },
      { src: `${R2}/artwork/charcoal/classical-bust/02.jpg`, alt: "Classical bust study in charcoal on table" },
    ],
    category: "charcoal",
    titleKey: "busto",
    span: "md:row-span-2",
  },
  {
    id: "anatomicos",
    images: [
      { src: `${R2}/artwork/charcoal/anatomical-studies/01.jpg`, alt: "Charcoal studies of facial features — eye, nose, lips" },
      { src: `${R2}/artwork/charcoal/anatomical-studies/02.jpg`, alt: "Charcoal studies of facial features on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "anatomicos",
  },
  {
    id: "velo",
    images: [
      { src: `${R2}/artwork/charcoal/veiled-bust/01.jpg`, alt: "Charcoal study of a veiled bust in profile" },
      { src: `${R2}/artwork/charcoal/veiled-bust/02.jpg`, alt: "Charcoal study of a veiled bust on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "velo",
    span: "md:row-span-2",
  },
  {
    id: "mano",
    images: [{ src: `${R2}/artwork/charcoal/hand-study/01.jpg`, alt: "Charcoal hand study with plaster cast" }],
    category: "charcoal",
    titleKey: "mano",
  },
  {
    id: "retratoCarbon",
    images: [{ src: `${R2}/artwork/charcoal/portrait-study/01.jpg`, alt: "Charcoal portrait study in art studio" }],
    category: "charcoal",
    titleKey: "retratoCarbon",
  },
  {
    id: "lector",
    images: [{ src: `${R2}/artwork/charcoal/cafe-reader/01.jpg`, alt: "Charcoal drawing of a man reading at a cafe by a window" }],
    category: "charcoal",
    titleKey: "lector",
  },
  {
    id: "bocetos",
    images: [{ src: `${R2}/artwork/charcoal/portrait-sketches/01.jpg`, alt: "Three quick charcoal portrait sketches" }],
    category: "charcoal",
    titleKey: "bocetos",
  },
  {
    id: "mirada",
    images: [{ src: `${R2}/artwork/charcoal/direct-gaze/01.jpg`, alt: "Charcoal portrait of a woman with a direct gaze" }],
    category: "charcoal",
    titleKey: "mirada",
  },

  // Digital
  {
    id: "tigers",
    images: [{ src: `${R2}/artwork/digital/tigers/01.jpg`, alt: "Expressive digital painting of tigers" }],
    category: "digital",
    titleKey: "tigers",
    videoSrc: `${R2}/artwork/digital/tigers/01.mp4`,
  },
  {
    id: "hendrix",
    images: [{ src: `${R2}/artwork/digital/hendrix/01.jpg`, alt: "Digital portrait of Jimi Hendrix" }],
    category: "digital",
    titleKey: "hendrix",
    videoSrc: `${R2}/artwork/digital/hendrix/01.mp4`,
  },
  {
    id: "rubel",
    images: [{ src: `${R2}/artwork/digital/rubel/01.jpg`, alt: "Digital painting of a man with a dog and blue figure" }],
    category: "digital",
    titleKey: "rubel",
    videoSrc: `${R2}/artwork/digital/rubel/01.mov`,
  },
  {
    id: "chrysalis",
    images: [{ src: `${R2}/artwork/digital/chrysalis/01.jpg`, alt: "Digital painting of a pink flower with teal background" }],
    category: "digital",
    titleKey: "chrysalis",
    videoSrc: `${R2}/artwork/digital/chrysalis/01.mp4`,
  },
  {
    id: "girassois",
    images: [{ src: `${R2}/artwork/digital/girassois/01.jpg`, alt: "Digital painting of sunflowers with blue swirls" }],
    category: "digital",
    titleKey: "girassois",
    videoSrc: `${R2}/artwork/digital/girassois/01.mp4`,
  },
  {
    id: "cameo",
    images: [{ src: `${R2}/artwork/digital/green-portrait/01.jpg`, alt: "Digital illustration of a woman with green hair" }],
    category: "digital",
    titleKey: "cameo",
    videoSrc: `${R2}/artwork/digital/green-portrait/01.mp4`,
  },
  {
    id: "bloom",
    images: [{ src: `${R2}/artwork/digital/bloom/01.jpg`, alt: "Digital illustration of red stockings and heels on an armchair" }],
    category: "digital",
    titleKey: "bloom",
    videoSrc: `${R2}/artwork/digital/bloom/01.mp4`,
  },
  {
    id: "estudioDigitalOleo",
    images: [{ src: `${R2}/artwork/digital/oil-study/01.jpg`, alt: "Digital oil study portrait with green tones" }],
    category: "digital",
    titleKey: "estudioDigitalOleo",
    videoSrc: `${R2}/artwork/digital/oil-study/01.mp4`,
  },
  {
    id: "brasil",
    images: [{ src: `${R2}/artwork/digital/brasil/01.jpg`, alt: "Digital painting of a colorful tropical landscape" }],
    category: "digital",
    titleKey: "brasil",
    videoSrc: `${R2}/artwork/digital/brasil/01.mp4`,
  },

  // Oil
  {
    id: "nome",
    images: [
      { src: `${R2}/artwork/oil/fallen-angel/01.jpg`, alt: "Oil painting study of the fallen angel" },
      { src: `${R2}/artwork/oil/fallen-angel/02.jpg`, alt: "Oil painting study of the fallen angel on easel in studio" },
    ],
    category: "oil",
    titleKey: "nome",
  },
  {
    id: "vela",
    images: [{ src: `${R2}/artwork/oil/candlelight/01.jpg`, alt: "Oil painting of a candle with warm light" }],
    category: "oil",
    titleKey: "vela",
  },
  {
    id: "bustoMarmol",
    images: [{ src: `${R2}/artwork/oil/marble-bust/01.jpg`, alt: "Oil grisaille study of a classical marble bust" }],
    category: "oil",
    titleKey: "bustoMarmol",
    span: "md:row-span-2",
  },
  {
    id: "madreHija",
    images: [{ src: `${R2}/artwork/oil/mother-daughter/01.jpg`, alt: "Oil portrait of a mother and daughter" }],
    category: "oil",
    titleKey: "madreHija",
    span: "md:row-span-2",
  },
  {
    id: "peligrosDeFumar",
    images: [
      { src: `${R2}/artwork/oil/peligros-de-fumar/01.jpg`, alt: "Oil painting of a woman with a burning crown, after the cover of Los peligros de fumar en la cama" },
      { src: `${R2}/artwork/oil/peligros-de-fumar/02.jpg`, alt: "Oil painting alongside the book Los peligros de fumar en la cama by Mariana Enriquez" },
      { src: `${R2}/artwork/oil/peligros-de-fumar/03.jpg`, alt: "Oil painting of a woman with a burning crown on easel in studio" },
    ],
    category: "oil",
    titleKey: "peligrosDeFumar",
  },

  // Pastel
  {
    id: "pastelRetrato",
    images: [
      { src: `${R2}/artwork/pastel/portrait/01.jpg`, alt: "Pastel portrait of a woman in profile with warm light" },
      { src: `${R2}/artwork/pastel/portrait/02.jpg`, alt: "Pastel portrait of a woman on easel in studio" },
    ],
    category: "pastel",
    titleKey: "pastelRetrato",
  },
  {
    id: "estudioRetrato",
    images: [{ src: `${R2}/artwork/pastel/portrait-study/01.jpg`, alt: "Pastel portrait study after old master" }],
    category: "pastel",
    titleKey: "estudioRetrato",
  },
  {
    id: "retratoVivido",
    images: [{ src: `${R2}/artwork/pastel/vivid-portrait/01.jpg`, alt: "Vivid pastel portrait with yellow and purple background" }],
    category: "pastel",
    titleKey: "retratoVivido",
  },
  {
    id: "nina",
    images: [{ src: `${R2}/artwork/pastel/young-girl/01.jpg`, alt: "Pastel portrait of a young girl with green eyes" }],
    category: "pastel",
    titleKey: "nina",
  },
  {
    id: "luzAudaz",
    images: [{ src: `${R2}/artwork/pastel/bold-light/01.jpg`, alt: "Pastel portrait of a woman with bold colors and blue shadows" }],
    category: "pastel",
    titleKey: "luzAudaz",
  },
  {
    id: "figuraSentada",
    images: [{ src: `${R2}/artwork/pastel/seated-figure/01.jpg`, alt: "Pastel study of a seated figure" }],
    category: "pastel",
    titleKey: "figuraSentada",
  },
];
