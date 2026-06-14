import type { Artwork } from "./types";

export const artworks: Artwork[] = [
  // Charcoal
  {
    id: "jarra",
    images: [
      { src: "/artwork/charcoal/jug-study/clean.jpg", alt: "Charcoal still life of a jug" },
      { src: "/artwork/charcoal/jug-study/studio.png", alt: "Charcoal still life of a jug on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "jarra",
  },
  {
    id: "busto",
    images: [
      { src: "/artwork/charcoal/classical-bust/clean.jpg", alt: "Classical bust study in charcoal" },
      { src: "/artwork/charcoal/classical-bust/studio.png", alt: "Classical bust study in charcoal on table" },
    ],
    category: "charcoal",
    titleKey: "busto",
    span: "md:row-span-2",
  },
  {
    id: "anatomicos",
    images: [
      { src: "/artwork/charcoal/anatomical-studies/clean.jpg", alt: "Charcoal studies of facial features — eye, nose, lips" },
      { src: "/artwork/charcoal/anatomical-studies/studio.png", alt: "Charcoal studies of facial features on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "anatomicos",
  },
  {
    id: "velo",
    images: [
      { src: "/artwork/charcoal/veiled-bust/clean.jpg", alt: "Charcoal study of a veiled bust in profile" },
      { src: "/artwork/charcoal/veiled-bust/studio.png", alt: "Charcoal study of a veiled bust on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "velo",
    span: "md:row-span-2",
  },
  {
    id: "mano",
    images: [{ src: "/artwork/charcoal/hand-study/1.png", alt: "Charcoal hand study with plaster cast" }],
    category: "charcoal",
    titleKey: "mano",
  },
  {
    id: "retratoCarbon",
    images: [{ src: "/artwork/charcoal/portrait-study/1.png", alt: "Charcoal portrait study in art studio" }],
    category: "charcoal",
    titleKey: "retratoCarbon",
  },
  {
    id: "lector",
    images: [{ src: "/artwork/charcoal/cafe-reader/1.jpg", alt: "Charcoal drawing of a man reading at a cafe by a window" }],
    category: "charcoal",
    titleKey: "lector",
  },
  {
    id: "bocetos",
    images: [{ src: "/artwork/charcoal/portrait-sketches/1.jpg", alt: "Three quick charcoal portrait sketches" }],
    category: "charcoal",
    titleKey: "bocetos",
  },
  {
    id: "mirada",
    images: [{ src: "/artwork/charcoal/direct-gaze/1.jpg", alt: "Charcoal portrait of a woman with a direct gaze" }],
    category: "charcoal",
    titleKey: "mirada",
  },

  // Digital
  {
    id: "tigers",
    images: [{ src: "/artwork/digital/tigers/1.png", alt: "Expressive digital painting of tigers" }],
    category: "digital",
    titleKey: "tigers",
    videoSrc: "/videos/tigers.mp4",
  },
  {
    id: "hendrix",
    images: [{ src: "/artwork/digital/hendrix/1.png", alt: "Digital portrait of Jimi Hendrix" }],
    category: "digital",
    titleKey: "hendrix",
    videoSrc: "/videos/hendrix.mp4",
  },
  {
    id: "rubel",
    images: [{ src: "/artwork/digital/rubel/1.png", alt: "Digital painting of a man with a dog and blue figure" }],
    category: "digital",
    titleKey: "rubel",
    videoSrc: "/videos/rubel.mp4",
  },
  {
    id: "chrysalis",
    images: [{ src: "/artwork/digital/chrysalis/1.png", alt: "Digital painting of a pink flower with teal background" }],
    category: "digital",
    titleKey: "chrysalis",
    videoSrc: "/videos/chrysalis.mp4",
  },
  {
    id: "girassois",
    images: [{ src: "/artwork/digital/girassois/1.png", alt: "Digital painting of sunflowers with blue swirls" }],
    category: "digital",
    titleKey: "girassois",
    videoSrc: "/videos/girassois.mp4",
  },
  {
    id: "cameo",
    images: [{ src: "/artwork/digital/green-portrait/1.png", alt: "Digital illustration of a woman with green hair" }],
    category: "digital",
    titleKey: "cameo",
    videoSrc: "/videos/green-portrait.mp4",
  },
  {
    id: "bloom",
    images: [{ src: "/artwork/digital/bloom/1.png", alt: "Digital illustration of red stockings and heels on an armchair" }],
    category: "digital",
    titleKey: "bloom",
    videoSrc: "/videos/bloom.mp4",
  },
  {
    id: "estudioDigitalOleo",
    images: [{ src: "/artwork/digital/oil-study/1.png", alt: "Digital oil study portrait with green tones" }],
    category: "digital",
    titleKey: "estudioDigitalOleo",
    videoSrc: "/videos/oil-study.mp4",
  },
  {
    id: "brasil",
    images: [{ src: "/artwork/digital/brasil/1.png", alt: "Digital painting of a colorful tropical landscape" }],
    category: "digital",
    titleKey: "brasil",
    videoSrc: "/videos/brasil.mp4",
  },

  // Oil
  {
    id: "nome",
    images: [
      { src: "/artwork/oil/fallen-angel/clean.jpg", alt: "Oil painting study of the fallen angel" },
      { src: "/artwork/oil/fallen-angel/studio.jpg", alt: "Oil painting study of the fallen angel on easel in studio" },
    ],
    category: "oil",
    titleKey: "nome",
  },
  {
    id: "vela",
    images: [{ src: "/artwork/oil/candlelight/1.jpg", alt: "Oil painting of a candle with warm light" }],
    category: "oil",
    titleKey: "vela",
  },
  {
    id: "bustoMarmol",
    images: [{ src: "/artwork/oil/marble-bust/1.jpg", alt: "Oil grisaille study of a classical marble bust" }],
    category: "oil",
    titleKey: "bustoMarmol",
    span: "md:row-span-2",
  },
  {
    id: "madreHija",
    images: [{ src: "/artwork/oil/mother-daughter/1.jpg", alt: "Oil portrait of a mother and daughter" }],
    category: "oil",
    titleKey: "madreHija",
    span: "md:row-span-2",
  },
  {
    id: "peligrosDeFumar",
    images: [
      { src: "/artwork/oil/peligros-de-fumar/1.jpg", alt: "Oil painting of a woman with a burning crown, after the cover of Los peligros de fumar en la cama" },
      { src: "/artwork/oil/peligros-de-fumar/2.jpg", alt: "Oil painting alongside the book Los peligros de fumar en la cama by Mariana Enriquez" },
      { src: "/artwork/oil/peligros-de-fumar/3.jpg", alt: "Oil painting of a woman with a burning crown on easel in studio" },
    ],
    category: "oil",
    titleKey: "peligrosDeFumar",
  },

  // Pastel
  {
    id: "pastelRetrato",
    images: [
      { src: "/artwork/pastel/portrait/clean.jpg", alt: "Pastel portrait of a woman in profile with warm light" },
      { src: "/artwork/pastel/portrait/studio.png", alt: "Pastel portrait of a woman on easel in studio" },
    ],
    category: "pastel",
    titleKey: "pastelRetrato",
  },
  {
    id: "estudioRetrato",
    images: [{ src: "/artwork/pastel/portrait-study/1.png", alt: "Pastel portrait study after old master" }],
    category: "pastel",
    titleKey: "estudioRetrato",
  },
  {
    id: "retratoVivido",
    images: [{ src: "/artwork/pastel/vivid-portrait/1.jpg", alt: "Vivid pastel portrait with yellow and purple background" }],
    category: "pastel",
    titleKey: "retratoVivido",
  },
  {
    id: "nina",
    images: [{ src: "/artwork/pastel/young-girl/1.jpg", alt: "Pastel portrait of a young girl with green eyes" }],
    category: "pastel",
    titleKey: "nina",
  },
  {
    id: "luzAudaz",
    images: [{ src: "/artwork/pastel/bold-light/1.jpg", alt: "Pastel portrait of a woman with bold colors and blue shadows" }],
    category: "pastel",
    titleKey: "luzAudaz",
  },
  {
    id: "figuraSentada",
    images: [{ src: "/artwork/pastel/seated-figure/1.jpg", alt: "Pastel study of a seated figure" }],
    category: "pastel",
    titleKey: "figuraSentada",
  },
];
