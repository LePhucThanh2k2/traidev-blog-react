import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
  keyword = "",
  isHighLight = false,
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategories = false,
  isShowAvatar = true,
  data,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });
  if (!data) return null;
  return (
    <article className={classes}>
      <ArticleItemThumb url={data.thumb} />
      <div className="article-item__content">
        {isShowCategories && <ArticleItemCategories data={data.categoryList} />}
        {isShowCategories && <ArticleItemStats />}

        <ArticleItemTitle
          slug={data.slug}
          title={data.title}
          isHighLight={isHighLight}
          keyword={keyword}
        />

        {isShowDesc && <ArticleItemDesc content={data.shortDesc} />}

        <ArticleItemInfo
          isShowAvatar={isShowAvatar}
          infoAuthor={data.author}
          date={data.date}
        />
      </div>
    </article>
  );
}
