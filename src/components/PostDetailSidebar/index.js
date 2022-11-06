import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetPostsRelatedAsync } from "../../store/postsRelated/action";
import PostDetailAuthor from "../PostDetailAuthor";
import PostDetailRelatedPosts from "../PostDetailRelatedPosts";

function PostDetailSidebar({ authorId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetPostsRelatedAsync({ author: authorId }));
  }, [authorId, dispatch]);
  const data = useSelector((state) => state.postsRelatedReducer.data);
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailRelatedPosts listPostsRelated={data} />
    </div>
  );
}
export default PostDetailSidebar;
