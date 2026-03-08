import type { Artwork } from "./types";

import charcoalJugStudy from "@/assets/artwork/charcoal-jug-study.png";
import charcoalClassicalBust from "@/assets/artwork/charcoal-classical-bust.png";
import charcoalAnatomicalStudies from "@/assets/artwork/charcoal-anatomical-studies.png";
import charcoalHandStudy from "@/assets/artwork/charcoal-hand-study.png";
import charcoalVeiledBust from "@/assets/artwork/charcoal-veiled-bust.png";
import charcoalPortraitStudy from "@/assets/artwork/charcoal-portrait-study.png";
import pastelPortraitStudy from "@/assets/artwork/pastel-portrait-study.png";
import pastelPortrait from "@/assets/artwork/pastel-portrait.png";
import digitalTigers from "@/assets/artwork/digital-tigers.png";
import digitalHendrix from "@/assets/artwork/digital-hendrix.png";
import digitalRubel from "@/assets/artwork/digital-rubel.png";
import oilFallenAngel from "@/assets/artwork/oil-fallen-angel.jpg";
import videoTigersProcess from "@/assets/artwork/video-tigers-process.mp4";
import videoHendrixProcess from "@/assets/artwork/video-hendrix-process.mp4";

export const artworks: Artwork[] = [
  { src: charcoalJugStudy, alt: "Charcoal still life of a jug on easel", category: "charcoal", titleKey: "jarra" },
  { src: digitalTigers, alt: "Expressive digital painting of tigers", category: "digital", titleKey: "tigers", videoSrc: videoTigersProcess },
  { src: charcoalClassicalBust, alt: "Classical bust portrait in charcoal", category: "charcoal", titleKey: "busto", span: "md:row-span-2" },
  { src: pastelPortrait, alt: "Pastel portrait of a woman", category: "pastel", titleKey: "pastelRetrato" },
  { src: charcoalAnatomicalStudies, alt: "Charcoal studies of facial features — eye, nose, lips", category: "charcoal", titleKey: "anatomicos" },
  { src: pastelPortraitStudy, alt: "Pastel portrait study after old master", category: "pastel", titleKey: "estudioRetrato" },
  { src: digitalHendrix, alt: "Digital portrait of Jimi Hendrix", category: "digital", titleKey: "hendrix", videoSrc: videoHendrixProcess },
  { src: charcoalVeiledBust, alt: "Charcoal study of a veiled bust", category: "charcoal", titleKey: "velo", span: "md:row-span-2" },
  { src: charcoalHandStudy, alt: "Charcoal hand study with plaster cast", category: "charcoal", titleKey: "mano" },
  { src: digitalRubel, alt: "Digital painting of a man with a dog and blue figure", category: "digital", titleKey: "rubel" },
  { src: charcoalPortraitStudy, alt: "Charcoal portrait study in art studio", category: "charcoal", titleKey: "retratoCarbon" },
  { src: oilFallenAngel, alt: "Oil painting study on easel in art studio", category: "oil", titleKey: "nome" },
];
