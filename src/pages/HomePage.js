import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import {
  actGetPostPagingAsync,
  actGetPostLatestAsync,
  actGetPostPopularAsync,
} from "../store/posts/action";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetPostLatestAsync({ per_page: 3, page: 1 }));
    dispatch(actGetPostPopularAsync({ per_page: 4, page: 1 }));
    dispatch(actGetPostPagingAsync({ per_page: 2, page: 1 }));
  }, [dispatch]);
  return (
    <>
      <ArticlePopular />
      <ArticleLatest />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
