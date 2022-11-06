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

        <div className="latest-news__list spacing">
          {dataPost.map((item, index) => {
            return (
              <div
                className="latest-news__card"
                key={index}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <ArticleItem data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
