export default function handleHighLightText(text, str) {
  const textConverted = text.toLowerCase();
  const keyword = new RegExp(textConverted, "gim");
  const haveKeyword = str.toLowerCase().includes(textConverted);
  if (haveKeyword) {
    return str.replace(keyword, (match) => {
      return "<mark>" + match + "</mark>";
    });
  }
  return str;
}
