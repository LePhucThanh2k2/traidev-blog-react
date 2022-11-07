import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetailContent from "../../components/PostDetailContent";
import PostDetailHead from "../../components/PostDetailHead";
import PostDetailSidebar from "../../components/PostDetailSidebar";
import IconLoading from "../../components/shared/IconLoading";
import { actGetPostDetailAsync } from "../../store/posts/action";
import "./main.css";

function PostDetailPage() {
  const data = useSelector((state) => state.postReducer.postDetail);
  let slug = useParams();
  const [status, setStatus] = useState("loading");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetPostDetailAsync(slug)).then((res) => {
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }, []);

  if (status === "error") {
    return (
      <div className="articles_list section">
        <div className="tcl-container">
          <div className="tcl-row tcl-jc-center">
            <h1>Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="articles_list section">
        <div className="tcl-container">
          <div className="tcl-row tcl-jc-center">
            <IconLoading width="150px" />
          </div>
        </div>
      </div>
    );
  }

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
