import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
function ArticlePopular() {
  const dataPost = useSelector((state) => state.postReducer.listPostPopular);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={"btn-arrow next"} onClick={onClick}>
        {" "}
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={"btn-arrow pre"} onClick={onClick}>
        {" "}
        <i className="fa-solid fa-angle-left"></i>
      </div>
    );
  }

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container" id="slider">
        {/* Main Title */}
        <div
          className="main-title spacing d-flex tcl-jc-between tcl-ais-center"
          data-aos="fade-right"
        >
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
        </div>
        {/* End Main Title */}
        {dataPost.length > 0 && (
          <Slider {...settings}>
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
          </Slider>
        )}
      </div>
    </div>
  );
}

export default ArticlePopular;
