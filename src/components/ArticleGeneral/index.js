import { useDispatch, useSelector } from "react-redux";
import { actGetPostGeneralAsync } from "../../store/posts/action";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postReducer.listPostGeneral);
  function handleLoadMore() {
    console.log("aaa");
    dispatch(actGetPostGeneralAsync({ per_page: 4, page: 1 }));
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {data.map((item, index) => {
            return (
              <div className="tcl-col-12 tcl-col-md-6">
                <ArticleItem isStyleCard isShowAvatar={false} data={item} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            loading={true}
            onClick={handleLoadMore}
          >
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
