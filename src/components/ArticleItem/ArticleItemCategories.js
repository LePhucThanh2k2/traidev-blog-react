import { useSelector } from "react-redux";

export default function ArticleItemCategories({ data }) {
  const dataCategory = useSelector(
    (state) => state.categoryReducer.categoryList
  );
  const categoryListName = dataCategory.filter((item) => {
    return data.includes(item.id);
  });
  return (
    <ul className="article-item__categories">
      {categoryListName.map((item, index) => {
        return (
          <li key={index}>
            <a href="/" className="btn btn-category">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
