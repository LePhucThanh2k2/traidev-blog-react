import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function ArticleItemCategories({ data }) {
  const location = useLocation();
  const url = location.pathname;
  const isPostCategoryPage = url.includes("category");
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
            <Link
              to={
                isPostCategoryPage
                  ? `${category.id}`
                  : `category/${category.id}`
              }
              className="btn btn-category"
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
