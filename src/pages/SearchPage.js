import { useLocation } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";

function SearchPage() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("q");
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">4 Results found for "{keyword}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem isStyleCard={true} isShowCategories={true} />
          </div>
        </div>

        <div className="text-center">
          <Button type="primary" size="large" loading={true}>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
