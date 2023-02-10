const initState = {
  idMedia: null,
};
function uploadAvatar(state = initState, action) {
  switch (action.type) {
    case "ACT_UPLOAD_MEDIA":
      return { idMedia: action.payload.idMedia };

    default:
      return state;
  }
}
export default uploadAvatar;
