import PostDetailComments from "./PostDetailComments";
import PostDetailRichText from "./PostDetailRichText";
import PostDetailTags from "./PostDetailTags";
import "./main.css";
function PostDetailContent({ thumb, content, listCategory }) {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={thumb ? thumb : ""} alt="blog-title" />
      </div>
      <div className="content-padding">
        {/* Post Detail rich text editor */}
        <PostDetailRichText contentHtml={content} />
        {/* End Post Detail rich text editor */}
        {/* Post Detail Tags */}
        <PostDetailTags data={listCategory} />
        {/* End Post Detail Tags */}
        {/* Post Detail Comments */}
        <PostDetailComments />
        {/* End Post Detail Comments */}
      </div>
    </div>
  );
}
export default PostDetailContent;
