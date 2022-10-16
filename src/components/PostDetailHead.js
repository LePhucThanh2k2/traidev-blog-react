function PostDetailHead({
  title = " Lorem Ipsum ",
  nameAuthor = "John Smith",
  date = "May 15, 2021",
  view = "2",
  comment = "5",
}) {
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By{" "}
            <a href="#">
              <strong>{nameAuthor}</strong>
            </a>
          </li>
          <li className="item date">{date}</li>
          <li className="item views">
            {view} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {comment} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default PostDetailHead;
