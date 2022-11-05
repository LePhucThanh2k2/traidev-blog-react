import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetpostsRelatedAsync } from "../../store/postsRelated/action";
import PostDetailAuthor from "../PostDetailAuthor";
import PostDetailRelatedPosts from "../PostDetailRelatedPosts";

function PostDetailSidebar({ authorId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetpostsRelatedAsync({ author: authorId }));
  }, [authorId]);
  const data = useSelector((state) => state.postsRelatedReducer.data);
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailRelatedPosts listpostsRelated={data} />
    </div>
  );
}
export default PostDetailSidebar;
