import { CATEGORIES, type ArtworkCategory } from "./types";

interface CategoryFiltersProps {
  active: ArtworkCategory;
  onChange: (category: ArtworkCategory) => void;
  categoryLabels: Record<string, string>;
}

const CategoryFilters = ({ active, onChange, categoryLabels }: CategoryFiltersProps) => {
  return (
    <div className="flex justify-center gap-8 mb-16 font-body text-[11px] tracking-[0.2em] uppercase">
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
          {categoryLabels[key]}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
