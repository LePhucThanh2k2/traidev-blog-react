import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { actGetListPostByIdCategoryAsync } from "../store/postsCategory/action";

function Categories() {
  let { id: idCategory } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actGetListPostByIdCategoryAsync({
        per_page: 3,
        page: 1,
        categories: idCategory,
      })
    );
  }, [idCategory, dispatch]);

  const {
    list: data,
    totalItems,
    totalPages,
    currentPage,
  } = useSelector((state) => state.postsCategory.listPost);

  const hideButton = currentPage === totalPages;
  function handleLoadMore() {
    setLoading(true);
    if (!hideButton) {
      dispatch(
        actGetListPostByIdCategoryAsync({
          per_page: 3,
          page: currentPage + 1,
          categories: idCategory,
        })
      ).then(() => {
        setLoading(false);
      });
    }
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">{`${totalItems} ${
          totalItems < 2 ? "Result" : "Results"
        } found`}</MainTitle>

        {data.map((item) => {
          return (
            <div className="tcl-row tcl-jc-center" key={item.id}>
              <div className="tcl-col-12 tcl-col-md-8" data-aos="fade-up-left">
                <ArticleItem
                  isHighLight={true}
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
export default Categories;
