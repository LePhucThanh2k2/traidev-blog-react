import PostDetailContent from "../../components/PostDetailContent";
import PostDetailHead from "../../components/PostDetailHead";
import PostDetailSidebar from "../../components/PostDetailSidebar";
import "./main.css";
function PostDetailPage() {
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead />
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />
            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
export default PostDetailPage;
