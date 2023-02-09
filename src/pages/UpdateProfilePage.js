import { useState } from "react";
import { useDispatch } from "react-redux";
import { actUpdateProfileAsync } from "../store/updateProfile/action";

function UpdateProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  function handlePreviewAvatar(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }
  function handleSubmit(e) {
    const data = new FormData();
    e.preventDefault();
    data.append("File", avatar);
    // dispatch(actUpdateProfileAsync(data, token));
    console.log(data);
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
        <textarea name="description" className="content"></textarea>
        <div className="btn-submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </>
  );
}

export default UpdateProfilePage;
