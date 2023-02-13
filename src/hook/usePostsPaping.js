import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/shared/Button";
import { actGetPostPagingAsync } from "../store/posts/action";

function usePostsPaping(extraParams = {}) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    list: data,
    totalPages,
    currentPage,
    totalItems,
  } = useSelector((state) => state.postReducer.listPostPaging);

  const hideButton = currentPage === totalPages;

  function handleLoadMore() {
    setLoading(true);
    dispatch(
      actGetPostPagingAsync({
        per_page: 2,
        page: currentPage + 1,
        ...extraParams,
      })
    ).then(() => {
      setLoading(false);
    });
  }

  function showButtonLoadMore() {
    return (
      !hideButton && (
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
      )
    );
  }

  return { data, showButtonLoadMore, totalItems };
}

export default usePostsPaping;
