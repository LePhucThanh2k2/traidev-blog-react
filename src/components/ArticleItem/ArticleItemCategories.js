import { useSelector } from "react-redux";

export default function ArticleItemCategories({ data }) {
  const dataCategory = useSelector(
    (state) => state.categoryReducer.categoryList
  );
  return (
    <ul className="article-item__categories">
      {data.map((categoryId) => {
        const category = dataCategory[categoryId];
        if (!category) return null;
        return (
          <li key={category.id}>
            <a href="/" className="btn btn-category">
              {category.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
