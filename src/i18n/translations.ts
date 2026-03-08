export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      work: "Art",
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
      label: "Art",
      heading: "",
      headingAccent: "Studies",
      categories: {
        all: "All",
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
      medium: "An archive of past writings on engineering, building for the web, and the space where technology meets creativity.",
    },
    connect: {
      label: "Connect",
      heading: "Say",
      headingAccent: "hello",
      description: "",
      footer: "© {year} Cecilia Gutierrez",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      work: "Arte",
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
      label: "Arte",
      heading: "",
      headingAccent: "Estudios",
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
      medium: "Un archivo de escritos anteriores sobre ingeniería, construir para la web, y el espacio donde la tecnología se encuentra con la creatividad.",
    },
    connect: {
      label: "Contacto",
      heading: "Decí",
      headingAccent: "hola",
      description: "",
      footer: "© {year} Cecilia Gutierrez",
    },
  },
} as const;

// Use a structural type so both locales are assignable
export type Translations = {
  nav: { about: string; work: string; writing: string; connect: string };
  hero: { location: string; tagline: string; taglineItalic: string; scroll: string };
  about: { label: string; heading: string; headingAccent: string; p1: string; p1Company: string; p1End: string; p2: string; p3: string };
  gallery: { label: string; heading: string; headingAccent: string; categories: { all: string; charcoal: string; pastel: string; digital: string }; viewArtwork: string; watchProcess: string };
  writing: { label: string; heading: string; headingAccent: string; medium: string };
  connect: { label: string; heading: string; headingAccent: string; description: string; footer: string };
};
