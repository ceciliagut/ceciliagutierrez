export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      writing: "Writing",
      connect: "Connect",
    },
    hero: {
      location: "Based in Barcelona — from Uruguay",
      tagline: "I build systems by day and make art by night.",
      taglineItalic: "Sometimes both at once.",
      scroll: "scroll",
    },
    about: {
      label: "About",
      heading: "A note,",
      headingAccent: "from me",
      p1: `I'm Cecilia — born in Uruguay, living in Barcelona. I've been at`,
      p1Company: "N26",
      p1End: `since 2022, growing into my current role as Senior Web Engineer. I architect and build things for the web — clean code, thoughtful systems, the kind of work that disappears when it's done well.`,
      p2: `But I can't contain myself to just one mode of expression. I draw. I paint — oils, acrylics, whatever's nearby. I make digital art. I write. It's not a side project or a hobby. It's the other half.`,
      p3: `This site is where both halves live — the person who debugs distributed systems and the one who gets paint under her nails. They're the same person. Always have been.`,
    },
    gallery: {
      label: "Work",
      heading: "The other",
      headingAccent: "language",
      categories: {
        all: "Everything",
        charcoal: "Charcoal",
        pastel: "Pastel",
        digital: "Digital",
      },
      viewArtwork: "View artwork",
      watchProcess: "Watch process",
    },
    writing: {
      label: "Writing",
      heading: "Words,",
      headingAccent: "too",
      medium: "Long-form thoughts on engineering, building for the web, and the space where technology meets creativity.",
      substack: "More personal writing — essays, reflections, and the kind of thinking that doesn't fit in a code review.",
    },
    connect: {
      label: "Connect",
      heading: "Say",
      headingAccent: "hello",
      description: "Whether it's about code, art, or something in between — I'd love to hear from you.",
      footer: "© {year} Cecilia Gutierrez",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      work: "Obra",
      writing: "Escritos",
      connect: "Contacto",
    },
    hero: {
      location: "Viviendo en Barcelona — desde Uruguay",
      tagline: "Construyo sistemas de día y hago arte de noche.",
      taglineItalic: "A veces, las dos cosas a la vez.",
      scroll: "scroll",
    },
    about: {
      label: "Sobre mí",
      heading: "Una nota,",
      headingAccent: "de mi parte",
      p1: `Soy Cecilia — nacida en Uruguay, viviendo en Barcelona. Trabajo en`,
      p1Company: "N26",
      p1End: `desde 2022, creciendo hasta mi rol actual como Senior Web Engineer. Diseño y construyo cosas para la web — código limpio, sistemas pensados, el tipo de trabajo que desaparece cuando está bien hecho.`,
      p2: `Pero no puedo limitarme a un solo modo de expresión. Dibujo. Pinto — óleos, acrílicos, lo que tenga a mano. Hago arte digital. Escribo. No es un proyecto paralelo ni un hobby. Es la otra mitad.`,
      p3: `Este sitio es donde viven las dos mitades — la persona que depura sistemas distribuidos y la que se mancha las uñas de pintura. Son la misma persona. Siempre lo fueron.`,
    },
    gallery: {
      label: "Obra",
      heading: "El otro",
      headingAccent: "lenguaje",
      categories: {
        all: "Todo",
        charcoal: "Carboncillo",
        pastel: "Pastel",
        digital: "Digital",
      },
      viewArtwork: "Ver obra",
      watchProcess: "Ver proceso",
    },
    writing: {
      label: "Escritos",
      heading: "Palabras,",
      headingAccent: "también",
      medium: "Reflexiones largas sobre ingeniería, construir para la web, y el espacio donde la tecnología se encuentra con la creatividad.",
      substack: "Escritura más personal — ensayos, reflexiones, y el tipo de pensamiento que no cabe en un code review.",
    },
    connect: {
      label: "Contacto",
      heading: "Decí",
      headingAccent: "hola",
      description: "Ya sea sobre código, arte, o algo entre ambos — me encantaría saber de vos.",
      footer: "© {year} Cecilia Gutierrez",
    },
  },
} as const;

export type Translations = (typeof translations)["en" | "es"];
