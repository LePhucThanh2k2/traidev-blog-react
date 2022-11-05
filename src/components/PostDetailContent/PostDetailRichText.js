import { createMarkup, strHtmlAfterMarkup } from "../../helper";

function PostDetailRichText({ contentHtml }) {
  const strMarkup = createMarkup(contentHtml);
  const str = strHtmlAfterMarkup(strMarkup);
  return str;
}
export default PostDetailRichText;
