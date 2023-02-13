function FormComment({
  funcHandleChange,
  funcHandleSubmit,
  content,
  avatar,
  parent,
}) {
  return (
    <>
      <div
        className={parent === 0 ? "comments__form" : " comments__form--reply"}
      >
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            {avatar && (
              <a href="/#">
                <img src={avatar ? avatar : ""} alt="username" />
              </a>
            )}
          </div>
          <textarea value={content} onChange={funcHandleChange} />
        </div>
        <div className="text-right">
          <button className="btn btn-default" onClick={funcHandleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default FormComment;
