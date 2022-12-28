import { formatRelativeDate } from "./day";

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

export function mappingListComment(item) {
  return {
    totalCommentReply: item.comment_reply_count,
    author: item.author_data,
    content: item.content.rendered,
    date: formatRelativeDate(item.date).dateRelative,
    id: item.id,
  };
}
export function mappingListChildComment(item) {
  return {
    [item.id]: {
      totalCommentReply: item.comment_reply_count,
      author: item.author_data,
      content: item.content.rendered,
      date: formatRelativeDate(item.date).dateRelative,
      id: item.id,
    },
  };
}

export function handleFormValidation(params) {
  const { name, value } = params;
  let error = "";
  if (name) {
    if (value === "") {
      error = `${name} not empty`;
    } else if (value.length < 6) {
      error = ` Please enter ${name} above 6 characters`;
    }
  }
  // if (name === "confirmPassword") {
  //   if (value !== formData.password.value) {
  //     error = `Password and Password confirm must match`;
  //   }
  // }

  return error;
}

export function commentItem(item) {
  const strMarkup = createMarkup(item.content);
  return (
    <li className="item" key={item.id}>
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/#">
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1669532641457-473c5840e272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF1dGhvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="avtUser"
            />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/#" className="comments__section--user">
            {item.author.nickname}
          </a>
          <p className="comments__section--time">{item.date}</p>
          <div className="comments__section--text">
            {strHtmlAfterMarkup(strMarkup)}
          </div>
          <i className="ion-reply comments__section--reply"></i>
        </div>
      </div>
    </li>
  );
}
