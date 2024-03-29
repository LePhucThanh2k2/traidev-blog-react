import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import "./popular-news-list.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
function ArticlePopular() {
  const dataPost = useSelector((state) => state.postReducer.listPostPopular);
  const settings = {
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: () => {},
    afterChange: () => {},
    // cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
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
    <div className="popular-news ">
      <div className="tcl-container" id="slider">
        {/* Main Title */}
        <MainTitle>Bài viết phổ biến</MainTitle>
        {/* End Main Title */}
        {dataPost.length > 0 && (
          <Slider {...settings}>
            {dataPost.map((item, index) => {
              return (
                <div className="latest-news__card fade-up" key={index}>
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
