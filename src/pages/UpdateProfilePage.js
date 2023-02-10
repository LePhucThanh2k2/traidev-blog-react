import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actUploadMediaAsync } from "../store/updateProfile/action";

function UpdateProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const [content, setContent] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  function handlePreviewAvatar(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", avatar);
    dispatch(actUploadMediaAsync(content, data, token)).then((res) => {
      if (res.ok) {
        history.push("/");
      }
    });
  }

  return (
    <>
      <div className="update-profile">
        <h1 className="header">Update Profile </h1>
        <label className="upload" htmlFor="input-file">
          <i className="fa-solid fa-cloud-arrow-up"></i>
        </label>
        <input
          onChange={handlePreviewAvatar}
          type="file"
          id="input-file"
          className="input-file"
          accept="image/png,image/jpg"
        />
        {avatar && (
          <img
            className="preview-image"
            src={avatar.preview}
            alt="Avatar"
          ></img>
        )}
        <span>Description Information</span>
        <textarea
          name="description"
          className="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div className="btn-submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </>
  );
}

export default UpdateProfilePage;
