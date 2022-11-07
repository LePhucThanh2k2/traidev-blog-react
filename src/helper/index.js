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
export function mappingPostData(item) {
  return {
    id: item.id,
    thumb: item.featured_media_url,
    date: item.date,
    slug: item.slug,
    title: item.title.rendered,
    shortDesc: item.excerpt.rendered,
    author: item.author_data,
    categoryList: item.categories,
  };
}
export function mappingPostDetailData(item) {
  return {
    ...mappingPostData(item),
    commentCount: item.comment_count,
    viewCount: item.view_count,
    contentPage: item.content.rendered,
    authorId: item.author,
  };
}
