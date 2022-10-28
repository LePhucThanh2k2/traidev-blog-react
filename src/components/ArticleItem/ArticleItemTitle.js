export default function ArticleItemTitle({ title, slug }) {
  return (
    <h2 className="article-item__title">
      <a href={`/post/${slug}`}>{title}</a>
    </h2>
  );
}
