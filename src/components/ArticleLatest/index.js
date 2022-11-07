import "./latest-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { useSelector } from "react-redux";

function ArticleLatest() {
  const dataPost = useSelector((state) => state.postReducer.listPostLatest);
  return (
    <div className="latest-news section">
      <div className="tcl-container" data-aos="fade-right">
        <MainTitle>Article Latest</MainTitle>

        <div className="popular-news__list spacing">
          <div className="popular-news__list--left" data-aos="fade-right">
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
              <div className="popular-news__list--card" data-aos="fade-left">
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
      </div>
    </div>
  );
}

export default ArticleLatest;
