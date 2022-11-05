import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import {
  actGetPostGeneralAsync,
  actGetPostLatestAsync,
  actGetPostPopularAsync,
} from "../store/posts/action";
import AOS from "../../node_modules/aos/dist/aos";
import "../../node_modules/aos/dist/aos.css";
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({ duration: 700 });
    dispatch(actGetPostLatestAsync({ per_page: 3, page: 1 }));
    dispatch(
      actGetPostPopularAsync({ per_page: 3, page: 2, orderby: "post_views" })
    );
    dispatch(actGetPostGeneralAsync({ per_page: 4, page: 1 }));
  }, [dispatch]);
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
