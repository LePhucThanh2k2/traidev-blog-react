import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import usePostsPaping from "../hook/usePostsPaping";
import {
  actGetPostGeneralAsync,
  actGetPostPaging,
  actGetPostPagingAsync,
} from "../store/posts/action";
function SearchPage() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("q");

  const dispatch = useDispatch();
  const { data, showButtonLoadMore, totalItems } = usePostsPaping({
    search: keyword,
    per_page: 3,
  });
  useEffect(() => {
    dispatch(actGetPostPagingAsync({ per_page: 3, page: 1, search: keyword }));
  }, [location, keyword, dispatch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalItems} Results found for "{keyword}"
        </MainTitle>
        {data &&
          data.map((item) => {
            return (
              <div className="tcl-row tcl-jc-center" key={item.id}>
                <div
                  className="tcl-col-12 tcl-col-md-8"
                  data-aos="fade-up-right"
                >
                  <ArticleItem
                    isHighLight={true}
                    keyword={keyword}
                    isStyleCard={true}
                    isShowCategories={true}
                    data={item}
                  />
                </div>
              </div>
            );
          })}
        {showButtonLoadMore()}
      </div>
    </div>
  );
}
export default SearchPage;
