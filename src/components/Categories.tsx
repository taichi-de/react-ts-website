type CategoriesProps = {
  categories: string[];
};

type FilterItemProps = {
  filterItems: (category: string) => void;
};

const Categories = (
  { categories }: CategoriesProps,
  { filterItems }: FilterItemProps
) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
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

export default Categories;
