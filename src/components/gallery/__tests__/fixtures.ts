export const R2_URL = "https://test.r2.dev";

export const sampleManifest = {
  oil: [
    {
      slug: "fallen-angel",
      title: { en: "The Fallen Angel", es: "El Ángel Caído" },
      images: 2,
    },
    {
      slug: "marble-bust",
      title: { en: "Marble Bust", es: "Busto de Mármol" },
    },
  ],
  digital: [
    {
      slug: "tigers",
      title: { en: "Me Chama de Gato", es: "Me Chama de Gato" },
      video: "01.mp4",
    },
  ],
};

export const noTitleManifest = {
  oil: [{ slug: "my-new-painting" }],
};

export const subtitleManifest = {
  oil: [
    {
      slug: "test-piece",
      title: { en: "Test", es: "Prueba" },
      subtitle: { en: "Oil on canvas", es: "Óleo sobre lienzo" },
    },
  ],
};

export const duplicateSlugManifest = {
  charcoal: [{ slug: "portrait-study", title: { en: "Portrait Study", es: "Estudio" } }],
  pastel: [{ slug: "portrait-study", title: { en: "Portrait Study", es: "Estudio" } }],
};
