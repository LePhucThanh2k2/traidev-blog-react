import "./main.css";
import ArticleRelated from "../ArticleRelated";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetPostsRelatedAsync } from "../../store/postsRelated/action";
function PostDetailRelatedPosts({ authorId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetPostsRelatedAsync({ author: authorId }));
  }, [authorId, dispatch]);
  const data = useSelector((state) => state.postsRelatedReducer.data);
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {data.map((item) => {
        return <ArticleRelated data={item} key={item.id} />;
      })}
    </div>
  );
}
export default PostDetailRelatedPosts;
