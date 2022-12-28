import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { actGetListPostByKeywordAsync } from "../store/posts/action";

const location = useLocation();
const keyword = new URLSearchParams(location.search).get("q");
const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(
    actGetListPostByKeywordAsync({ per_page: 3, page: 1, search: keyword })
  );
}, [location, keyword, dispatch]);

const {
  list: data,
  totalItems,
  totalPages,
  currentPageSearch,
} = useSelector((state) => state.postReducer.listPostBySearch);

const hideButton = currentPageSearch === totalPages;

function handleLoadMore() {
  setLoading(true);
  if (!hideButton) {
    dispatch(
      actGetListPostByKeywordAsync({
        per_page: 3,
        page: currentPageSearch + 1,
        search: keyword,
      })
    ).then(() => {
      setLoading(false);
    });
  }
}
export { handleLoadMore };
