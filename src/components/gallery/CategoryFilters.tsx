import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { CATEGORIES, type ArtworkCategory } from "./types";

interface CategoryFiltersProps {
  active: ArtworkCategory;
  onChange: (category: ArtworkCategory) => void;
}

const CategoryFilters = ({ active, onChange }: CategoryFiltersProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="flex justify-center gap-8 mb-16 font-body text-[11px] tracking-[0.2em] uppercase"
    >
      {CATEGORIES.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`transition-colors duration-300 pb-2 border-b ${
            active === key
              ? "text-foreground border-foreground"
              : "text-muted-foreground border-transparent hover:text-foreground"
          }`}
        >
          {t.gallery.categories[key]}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilters;
