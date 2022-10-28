import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
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
  return (
    <article className={classes}>
      <ArticleItemThumb url={data.featured_media_url} />
      <div className="article-item__content">
        {isShowCategories && <ArticleItemCategories />}
        {isShowCategories && <ArticleItemStats />}

        <ArticleItemTitle slug={data.slug} title={data.title.rendered} />

        {isShowDesc && <ArticleItemDesc content={data.excerpt.rendered} />}

        <ArticleItemInfo
          isShowAvatar={isShowAvatar}
          infoAuthor={data.author_data}
          date={data.date}
        />
      </div>
    </article>
  );
}
