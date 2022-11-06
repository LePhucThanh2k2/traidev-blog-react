import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetPostGeneralAsync } from "../../store/posts/action";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { list: data, totalPages } = useSelector(
    (state) => state.postReducer.listPostGeneral
  );
  const hasMorePost = currentPage <= totalPages;

  function handleLoadMore() {
    setLoading(true);
    dispatch(
      actGetPostGeneralAsync({
        per_page: 2,
        page: currentPage,
      })
    ).then(() => {
      setLoading(false);
    });
    setCurrentPage(currentPage + 1);
  }
  return (
    <div className="articles-list section" data-aos="fade-right">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {data.map((item, index) => {
            return (
              <div
                className="tcl-col-12 tcl-col-md-6"
                key={index}
                data-aos="fade-up"
              >
                <ArticleItem isStyleCard isShowAvatar={false} data={item} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}
        {hasMorePost && (
          <div className="text-center">
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleLoadMore}
            >
              Tải thêm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleGeneral;
