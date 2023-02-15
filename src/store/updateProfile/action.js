import updateProfile from "../../services/updateProfile";

export function actUploadMedia(idMedia) {
  return { type: "ACT_UPLOAD_MEDIA", payload: { idMedia } };
}

export function actUploadMediaAsync(content, data, token) {
  return async (dispatch) => {
    try {
      let idMedia = null;
      const res = await updateProfile.updateMedia(data, token);
      if (res.data) {
        idMedia = res.data.id;
        dispatch(
          actUpdateProfileAsync(
            {
              description: content,
              simple_local_avatar: {
                media_id: idMedia,
              },
            },
            token
          )
        );
      }
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Posting A New Comment Is Wrong" };
    }
  };
}
export function actUpdateProfileAsync(data, token) {
  return async () => {
    try {
      await updateProfile.updateAvatar(data, token);
    } catch (error) {}
  };
}
