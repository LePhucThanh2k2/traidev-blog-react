import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { actGetListPostByKeywordAsync } from "../store/search/action";

function SearchPage() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("q");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actGetListPostByKeywordAsync({ per_page: 3, page: 1, search: keyword })
    );
  }, [location, keyword, dispatch]);

  const {
    list: data,
    totalItems,
    totalPages,
    currentPage,
  } = useSelector((state) => state.searchReducer.listPost);

  const hideButton = currentPage === totalPages;
  function handleLoadMore() {
    setLoading(true);
    if (!hideButton) {
      dispatch(
        actGetListPostByKeywordAsync({
          per_page: 3,
          page: currentPage + 1,
          search: keyword,
        })
      ).then(() => {
        setLoading(false);
      });
    }
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalItems} Results found for "{keyword}"
        </MainTitle>

        {data.map((item) => {
          return (
            <div className="tcl-row tcl-jc-center" key={item.id}>
              <div className="tcl-col-12 tcl-col-md-8" data-aos="fade-up-right">
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
        {!hideButton && (
          <div className="text-center">
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchPage;
