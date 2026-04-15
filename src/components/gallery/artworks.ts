import type { Artwork } from "./types";

// Charcoal
import charcoalJugClean from "@/assets/artwork/charcoal/jug-study/clean.jpg";
import charcoalJugStudio from "@/assets/artwork/charcoal/jug-study/studio.png";
import charcoalBustClean from "@/assets/artwork/charcoal/classical-bust/clean.jpg";
import charcoalBustStudio from "@/assets/artwork/charcoal/classical-bust/studio.png";
import charcoalAnatomicalClean from "@/assets/artwork/charcoal/anatomical-studies/clean.jpg";
import charcoalAnatomicalStudio from "@/assets/artwork/charcoal/anatomical-studies/studio.png";
import charcoalVeiledClean from "@/assets/artwork/charcoal/veiled-bust/clean.jpg";
import charcoalVeiledStudio from "@/assets/artwork/charcoal/veiled-bust/studio.png";
import charcoalHandStudy from "@/assets/artwork/charcoal/hand-study/1.png";
import charcoalPortraitStudy from "@/assets/artwork/charcoal/portrait-study/1.png";
import charcoalCafeReader from "@/assets/artwork/charcoal/cafe-reader/1.jpg";
import charcoalPortraitSketches from "@/assets/artwork/charcoal/portrait-sketches/1.jpg";
import charcoalDirectGaze from "@/assets/artwork/charcoal/direct-gaze/1.jpg";

// Digital
import digitalTigers from "@/assets/artwork/digital/tigers/1.png";
import videoTigers from "@/assets/artwork/digital/tigers/process.mp4";
import digitalHendrix from "@/assets/artwork/digital/hendrix/1.png";
import videoHendrix from "@/assets/artwork/digital/hendrix/process.mp4";
import digitalRubel from "@/assets/artwork/digital/rubel/1.png";
import digitalChrysalis from "@/assets/artwork/digital/chrysalis/1.png";
import videoChrysalis from "@/assets/artwork/digital/chrysalis/process.mp4";
import digitalGirassois from "@/assets/artwork/digital/girassois/1.png";
import videoGirassois from "@/assets/artwork/digital/girassois/process.mp4";
import digitalGreenPortrait from "@/assets/artwork/digital/green-portrait/1.png";
import videoGreenPortrait from "@/assets/artwork/digital/green-portrait/process.mp4";
import digitalBloom from "@/assets/artwork/digital/bloom/1.png";
import videoBloom from "@/assets/artwork/digital/bloom/process.mp4";
import digitalOilStudy from "@/assets/artwork/digital/oil-study/1.png";
import videoOilStudy from "@/assets/artwork/digital/oil-study/process.mp4";
import digitalBrasil from "@/assets/artwork/digital/brasil/1.png";
import videoBrasil from "@/assets/artwork/digital/brasil/process.mp4";

// Oil
import oilFallenAngelClean from "@/assets/artwork/oil/fallen-angel/clean.jpg";
import oilFallenAngelStudio from "@/assets/artwork/oil/fallen-angel/studio.jpg";
import oilCandlelight from "@/assets/artwork/oil/candlelight/1.jpg";
import oilMarbleBust from "@/assets/artwork/oil/marble-bust/1.jpg";
import oilMotherDaughter from "@/assets/artwork/oil/mother-daughter/1.jpg";
import oilPeligrosClean from "@/assets/artwork/oil/peligros-de-fumar/1.jpg";
import oilPeligrosBook from "@/assets/artwork/oil/peligros-de-fumar/2.jpg";
import oilPeligrosStudio from "@/assets/artwork/oil/peligros-de-fumar/3.jpg";

// Pastel
import pastelPortraitClean from "@/assets/artwork/pastel/portrait/clean.jpg";
import pastelPortraitStudio from "@/assets/artwork/pastel/portrait/studio.png";
import pastelPortraitStudy from "@/assets/artwork/pastel/portrait-study/1.png";
import pastelVividPortrait from "@/assets/artwork/pastel/vivid-portrait/1.jpg";
import pastelYoungGirl from "@/assets/artwork/pastel/young-girl/1.jpg";
import pastelBoldLight from "@/assets/artwork/pastel/bold-light/1.jpg";
import pastelSeatedFigure from "@/assets/artwork/pastel/seated-figure/1.jpg";

export const artworks: Artwork[] = [
  // Charcoal
  {
    id: "jarra",
    images: [
      { src: charcoalJugClean, alt: "Charcoal still life of a jug" },
      { src: charcoalJugStudio, alt: "Charcoal still life of a jug on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "jarra",
  },
  {
    id: "busto",
    images: [
      { src: charcoalBustClean, alt: "Classical bust study in charcoal" },
      { src: charcoalBustStudio, alt: "Classical bust study in charcoal on table" },
    ],
    category: "charcoal",
    titleKey: "busto",
    span: "md:row-span-2",
  },
  {
    id: "anatomicos",
    images: [
      { src: charcoalAnatomicalClean, alt: "Charcoal studies of facial features — eye, nose, lips" },
      { src: charcoalAnatomicalStudio, alt: "Charcoal studies of facial features on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "anatomicos",
  },
  {
    id: "velo",
    images: [
      { src: charcoalVeiledClean, alt: "Charcoal study of a veiled bust in profile" },
      { src: charcoalVeiledStudio, alt: "Charcoal study of a veiled bust on easel in studio" },
    ],
    category: "charcoal",
    titleKey: "velo",
    span: "md:row-span-2",
  },
  {
    id: "mano",
    images: [{ src: charcoalHandStudy, alt: "Charcoal hand study with plaster cast" }],
    category: "charcoal",
    titleKey: "mano",
  },
  {
    id: "retratoCarbon",
    images: [{ src: charcoalPortraitStudy, alt: "Charcoal portrait study in art studio" }],
    category: "charcoal",
    titleKey: "retratoCarbon",
  },
  {
    id: "lector",
    images: [{ src: charcoalCafeReader, alt: "Charcoal drawing of a man reading at a cafe by a window" }],
    category: "charcoal",
    titleKey: "lector",
  },
  {
    id: "bocetos",
    images: [{ src: charcoalPortraitSketches, alt: "Three quick charcoal portrait sketches" }],
    category: "charcoal",
    titleKey: "bocetos",
  },
  {
    id: "mirada",
    images: [{ src: charcoalDirectGaze, alt: "Charcoal portrait of a woman with a direct gaze" }],
    category: "charcoal",
    titleKey: "mirada",
  },

  // Digital
  {
    id: "tigers",
    images: [{ src: digitalTigers, alt: "Expressive digital painting of tigers" }],
    category: "digital",
    titleKey: "tigers",
    videoSrc: videoTigers,
  },
  {
    id: "hendrix",
    images: [{ src: digitalHendrix, alt: "Digital portrait of Jimi Hendrix" }],
    category: "digital",
    titleKey: "hendrix",
    videoSrc: videoHendrix,
  },
  {
    id: "rubel",
    images: [{ src: digitalRubel, alt: "Digital painting of a man with a dog and blue figure" }],
    category: "digital",
    titleKey: "rubel",
  },
  {
    id: "chrysalis",
    images: [{ src: digitalChrysalis, alt: "Digital painting of a pink flower with teal background" }],
    category: "digital",
    titleKey: "chrysalis",
    videoSrc: videoChrysalis,
  },
  {
    id: "girassois",
    images: [{ src: digitalGirassois, alt: "Digital painting of sunflowers with blue swirls" }],
    category: "digital",
    titleKey: "girassois",
    videoSrc: videoGirassois,
  },
  {
    id: "cameo",
    images: [{ src: digitalGreenPortrait, alt: "Digital illustration of a woman with green hair" }],
    category: "digital",
    titleKey: "cameo",
    videoSrc: videoGreenPortrait,
  },
  {
    id: "bloom",
    images: [{ src: digitalBloom, alt: "Digital illustration of red stockings and heels on an armchair" }],
    category: "digital",
    titleKey: "bloom",
    videoSrc: videoBloom,
  },
  {
    id: "estudioDigitalOleo",
    images: [{ src: digitalOilStudy, alt: "Digital oil study portrait with green tones" }],
    category: "digital",
    titleKey: "estudioDigitalOleo",
    videoSrc: videoOilStudy,
  },
  {
    id: "brasil",
    images: [{ src: digitalBrasil, alt: "Digital painting of a colorful tropical landscape" }],
    category: "digital",
    titleKey: "brasil",
    videoSrc: videoBrasil,
  },

  // Oil
  {
    id: "nome",
    images: [
      { src: oilFallenAngelClean, alt: "Oil painting study of the fallen angel" },
      { src: oilFallenAngelStudio, alt: "Oil painting study of the fallen angel on easel in studio" },
    ],
    category: "oil",
    titleKey: "nome",
  },
  {
    id: "vela",
    images: [{ src: oilCandlelight, alt: "Oil painting of a candle with warm light" }],
    category: "oil",
    titleKey: "vela",
  },
  {
    id: "bustoMarmol",
    images: [{ src: oilMarbleBust, alt: "Oil grisaille study of a classical marble bust" }],
    category: "oil",
    titleKey: "bustoMarmol",
    span: "md:row-span-2",
  },
  {
    id: "madreHija",
    images: [{ src: oilMotherDaughter, alt: "Oil portrait of a mother and daughter" }],
    category: "oil",
    titleKey: "madreHija",
    span: "md:row-span-2",
  },
  {
    id: "peligrosDeFumar",
    images: [
      { src: oilPeligrosClean, alt: "Oil painting of a woman with a burning crown, after the cover of Los peligros de fumar en la cama" },
      { src: oilPeligrosBook, alt: "Oil painting alongside the book Los peligros de fumar en la cama by Mariana Enriquez" },
      { src: oilPeligrosStudio, alt: "Oil painting of a woman with a burning crown on easel in studio" },
    ],
    category: "oil",
    titleKey: "peligrosDeFumar",
  },

  // Pastel
  {
    id: "pastelRetrato",
    images: [
      { src: pastelPortraitClean, alt: "Pastel portrait of a woman in profile with warm light" },
      { src: pastelPortraitStudio, alt: "Pastel portrait of a woman on easel in studio" },
    ],
    category: "pastel",
    titleKey: "pastelRetrato",
  },
  {
    id: "estudioRetrato",
    images: [{ src: pastelPortraitStudy, alt: "Pastel portrait study after old master" }],
    category: "pastel",
    titleKey: "estudioRetrato",
  },
  {
    id: "retratoVivido",
    images: [{ src: pastelVividPortrait, alt: "Vivid pastel portrait with yellow and purple background" }],
    category: "pastel",
    titleKey: "retratoVivido",
  },
  {
    id: "nina",
    images: [{ src: pastelYoungGirl, alt: "Pastel portrait of a young girl with green eyes" }],
    category: "pastel",
    titleKey: "nina",
  },
  {
    id: "luzAudaz",
    images: [{ src: pastelBoldLight, alt: "Pastel portrait of a woman with bold colors and blue shadows" }],
    category: "pastel",
    titleKey: "luzAudaz",
  },
  {
    id: "figuraSentada",
    images: [{ src: pastelSeatedFigure, alt: "Pastel study of a seated figure" }],
    category: "pastel",
    titleKey: "figuraSentada",
  },
];
