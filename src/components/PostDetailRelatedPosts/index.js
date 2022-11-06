import "./main.css";
import ArticleRelated from "../ArticleRelated";
function PostDetailRelatedPosts({ listPostsRelated }) {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {listPostsRelated.map((item) => {
        return <ArticleRelated data={item} key={item.id} />;
      })}
    </div>
  );
}
export default PostDetailRelatedPosts;
