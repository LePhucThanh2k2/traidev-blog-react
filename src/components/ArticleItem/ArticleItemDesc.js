export default function ArticleItemDesc({ content }) {
  const descPre = content.replace("<p>", "");
  const desc = descPre.replace("</p>", "");
  return <p className="article-item__desc">{desc}</p>;
}
