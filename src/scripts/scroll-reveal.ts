const skipTransition = window.location.hash !== "";

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        if (skipTransition) {
          el.style.transition = "none";
          el.classList.add("is-visible");
          el.offsetHeight; // force reflow
          el.style.transition = "";
        } else {
          el.classList.add("is-visible");
        }
        obs.unobserve(el);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
