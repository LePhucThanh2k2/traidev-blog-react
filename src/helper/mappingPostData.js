function mappingPostData(item) {
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
export default mappingPostData;
