import PostDetailAuthor from "../PostDetailSidebar copy/PostDetailAuthor";

function PostDetailSidebar() {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailSidebar />
    </div>
  );
}
export default PostDetailSidebar;
