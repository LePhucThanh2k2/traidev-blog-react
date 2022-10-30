import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";

function ArticlePopular() {
  const dataPost = useSelector((state) => state.postReducer.listPostPopular);

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
        </div>
        {/* End Main Title */}
        {dataPost.length > 0 && (
          <div className="popular-news__list spacing">
            <div className="popular-news__list--left">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem
                    isStyleCard
                    isShowCategories
                    isShowDesc
                    data={dataPost[0]}
                  />
                </div>
                {/* End Popular news card */}
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem
                    isStyleCard
                    isShowCategories
                    isShowDesc
                    data={dataPost[1]}
                  />
                </div>
                {/* End Popular news card */}
              </div>
            </div>
            <div className="popular-news__list--right">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <div className="popular-news__list--card">
                  <ArticleItem
                    isStyleCard
                    isStyleRow
                    isShowDesc
                    data={dataPost[2]}
                  />
                </div>
                {/* End Popular news card */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticlePopular;
