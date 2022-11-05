import { formatRelativeDate } from "../helper/day";

function PostDetailHead({ date, author, title, commentCount, viewCount }) {
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By &nbsp;
            <a href="/">
              <strong>{author}</strong>
            </a>
          </li>
          <li className="item date">
            {formatRelativeDate(date).dateFormatted}
          </li>
          <li className="item views">
            {viewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {commentCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default PostDetailHead;
