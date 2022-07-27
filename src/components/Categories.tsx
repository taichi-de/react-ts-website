type CategoriesProps = {
  categories: string[];
};

type FilterItemProps = {
  filterItems: (category: string) => void;
};

export default function Categories (
  { categories }: CategoriesProps,
  { filterItems }: FilterItemProps
){
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
