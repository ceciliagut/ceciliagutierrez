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
      location: "",
      greeting: "Hey, I'm",
      tagline: "",
      taglineItalic: "",
      scroll: "scroll",
    },
    about: {
      label: "About",
      heading: "A note,",
      headingAccent: "from me",
      p1: `Uruguayan, living in Barcelona. I've been at`,
      p1Company: "N26",
      p1End: `since 2022, now as a Senior Web Engineer. Software Engineer graduated from UdelaR, Montevideo, Uruguay. I paint. I write. I draw.`,
      p2: ``,
      p3: ``,
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
      titles: {
        jarra: "Jug Study",
        tigers: "Call Me Cat",
        busto: "Classical Bust",
        pastelRetrato: "Pastel Portrait",
        anatomicos: "Anatomical Studies",
        estudioRetrato: "Portrait Study",
        hendrix: "Lover Man",
        velo: "Veiled Bust",
        mano: "Hand Study",
      },
    },
    writing: {
      label: "Writing",
      heading: "Words,",
      headingAccent: "too",
      medium: "An archive of writings on engineering and life that I was thinking about at the time.",
      substack: "New writings.",
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
      location: "",
      greeting: "Hey, soy",
      tagline: "",
      taglineItalic: "",
      scroll: "scroll",
    },
    about: {
      label: "Sobre mí",
      heading: "Una nota,",
      headingAccent: "de mi parte",
      p1: `Uruguaya, viviendo en Barcelona. Trabajo en`,
      p1Company: "N26",
      p1End: `desde 2022, ahora como Senior Web Engineer. Ingeniera de Software graduada de UdelaR, Montevideo, Uruguay. Pinto. Escribo. Dibujo.`,
      p2: ``,
      p3: ``,
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
      medium: "Un archivo de escritos sobre ingeniería y vida en los que estaba pensando en ese momento.",
      substack: "Nuevos escritos.",
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
  hero: { location: string; greeting: string; tagline: string; taglineItalic: string; scroll: string };
  about: { label: string; heading: string; headingAccent: string; p1: string; p1Company: string; p1End: string; p2: string; p3: string };
  gallery: { label: string; heading: string; headingAccent: string; categories: { all: string; charcoal: string; pastel: string; digital: string }; viewArtwork: string; watchProcess: string };
  writing: { label: string; heading: string; headingAccent: string; medium: string; substack: string };
  connect: { label: string; heading: string; headingAccent: string; description: string; footer: string };
};
