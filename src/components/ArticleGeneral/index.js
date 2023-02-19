import usePostsPaping from "../../hook/usePostsPaping";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  const { data, showButtonLoadMore } = usePostsPaping();

  return (
    <div className="articles-list section" data-aos="fade-right">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bài viết tổng hợp</MainTitle>
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
        {showButtonLoadMore()}
      </div>
    </div>
  );
}

export default ArticleGeneral;
