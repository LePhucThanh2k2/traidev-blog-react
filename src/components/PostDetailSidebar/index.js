import PostDetailAuthor from "../PostDetailAuthor";
import PostDetailRelatedPosts from "../PostDetailRelatedPosts";

function PostDetailSidebar({ authorId }) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailRelatedPosts authorId={authorId} />
    </div>
  );
}
export default PostDetailSidebar;
