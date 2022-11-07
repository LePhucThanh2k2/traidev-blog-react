import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetailContent from "../../components/PostDetailContent";
import PostDetailHead from "../../components/PostDetailHead";
import PostDetailSidebar from "../../components/PostDetailSidebar";
import { actGetPostDetailAsync } from "../../store/postDetail/action";
import "./main.css";
function PostDetailPage() {
  let slug = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetPostDetailAsync(slug));
  }, [dispatch, slug]);
  const data = useSelector((state) => state.postDetailReducer.data[0]);

  if (!data) return null;
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead
        title={data.title}
        date={data.date}
        commentCount={data.commentCount}
        author={data.author.nickname}
        viewCount={data.viewCount}
      />
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent
              thumb={data.thumb}
              content={data.contentPage}
              listCategory={data.categoryList}
            />
            <PostDetailSidebar authorId={data.authorId} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default PostDetailPage;
