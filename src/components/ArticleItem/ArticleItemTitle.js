import { Link } from "react-router-dom";
import { createMarkup, strHtmlAfterMarkup } from "../../helper";
import handleHighLightText from "../../helper/hightLightText";

export default function ArticleItemTitle({
  title,
  slug,
  isHighLight,
  keyword,
}) {
  const strHtml = handleHighLightText(keyword, title);
  const strMarkup = createMarkup(strHtml);
  const str = strHtmlAfterMarkup(strMarkup);

  return (
    <h2 className="article-item__title">
      {isHighLight ? (
        <Link to={`/post/${slug}`}>{str}</Link>
      ) : (
        <Link to={`/post/${slug}`}>{title}</Link>
      )}
    </h2>
  );
}
