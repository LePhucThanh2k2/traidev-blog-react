export default function ArticleItemThumb({ url }) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={url} alt="assets/images/blog-1.jpg" />
      </a>
    </div>
  );
}
