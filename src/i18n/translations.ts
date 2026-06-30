export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      work: "Art",
      writing: "Writing",
      mentoring: "Mentoring",
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
      p1End: `since 2022, now as a Senior Fullstack Engineer. Software Engineer graduated from`,
      p1University: "UdelaR",
      p1End2: `, Montevideo, Uruguay. I paint. I write. I draw.`,
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
        oil: "Oil",
      },
      viewArtwork: "View artwork",
      watchProcess: "Watch process",
      backToGallery: "Back to gallery",
    },
    writing: {
      label: "Writing",
      heading: "Words,",
      headingAccent: "too",
      medium: "An archive of writings on engineering and life that I was thinking about at the time.",
      substack: "New writings. Only in Spanish.",
      latestPosts: "Latest posts",
      readMore: "Read post",
      subscribe: "Subscribe",
      subscribeDescription: "Get new posts delivered to your inbox.",
    },
    mentoring: {
      label: "Mentoring",
      heading: "Ready to grow together?",
      headingAccent: "",
      description: "I mentor through",
      org: "Mujeres IT",
      descriptionEnd: ", the largest Women in Tech community born in Uruguay.",
      book: "Book a session",
      bookDescription: "Schedule a free mentoring session directly.",
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
      mentoring: "Mentorías",
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
      p1End: `desde 2022, ahora como Senior Fullstack Engineer. Ingeniera de Software graduada de`,
      p1University: "UdelaR",
      p1End2: `, Montevideo, Uruguay. Pinto. Escribo. Dibujo.`,
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
        oil: "Óleo",
      },
      viewArtwork: "Ver obra",
      watchProcess: "Ver proceso",
      backToGallery: "Volver a la galería",
    },
    writing: {
      label: "Escritos",
      heading: "Palabras,",
      headingAccent: "también",
      medium: "Un archivo de escritos sobre ingeniería y vida en los que estaba pensando en ese momento.",
      substack: "Nuevos escritos. Solo en español.",
      latestPosts: "Publicaciones recientes",
      readMore: "Leer publicacion",
      subscribe: "Suscribirse",
      subscribeDescription: "Recibe nuevas publicaciones en tu correo.",
    },
    mentoring: {
      label: "Mentorías",
      heading: "Crezcamos en equipo",
      headingAccent: "",
      description: "Soy mentora a través de",
      org: "Mujeres IT",
      descriptionEnd: ", la comunidad de Women in Tech más grande nacida en Uruguay.",
      book: "Agendar sesión",
      bookDescription: "Agendá una sesión de mentoría gratuita directamente.",
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
  nav: { about: string; work: string; writing: string; mentoring: string; connect: string };
  hero: { location: string; greeting: string; tagline: string; taglineItalic: string; scroll: string };
  about: { label: string; heading: string; headingAccent: string; p1: string; p1Company: string; p1End: string; p1University: string; p1End2: string; p2: string; p3: string };
  gallery: { label: string; heading: string; headingAccent: string; categories: { all: string; charcoal: string; pastel: string; digital: string; oil: string }; viewArtwork: string; watchProcess: string; backToGallery: string };
  writing: { label: string; heading: string; headingAccent: string; medium: string; substack: string; latestPosts: string; readMore: string; subscribe: string; subscribeDescription: string };
  mentoring: { label: string; heading: string; headingAccent: string; description: string; org: string; descriptionEnd: string; book: string; bookDescription: string };
  connect: { label: string; heading: string; headingAccent: string; description: string; footer: string };
};
