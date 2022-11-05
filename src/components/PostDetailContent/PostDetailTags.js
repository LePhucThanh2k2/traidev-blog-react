import { useSelector } from "react-redux";

function PostDetailTags({ data }) {
  const listCategory = useSelector(
    (state) => state.categoryReducer.categoryList
  );
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {data.map((categoryId) => {
          if (!listCategory[categoryId]) return null;
          return (
            <li className="item" key={categoryId}>
              <a href="/#" className="btn btn-default">
                {listCategory[categoryId].name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default PostDetailTags;
