export function handleHashCategoryById(items) {
  const objData = {};
  for (let i = 0; i < items.length; i++) {
    objData[items[i].id] = { id: items[i].id, name: items[i].name };
  }
  return objData;
}
export function createMarkup(strHtml) {
  return { __html: strHtml };
}

export function strHtmlAfterMarkup(funcMarkup) {
  return <div dangerouslySetInnerHTML={funcMarkup} />;
}
