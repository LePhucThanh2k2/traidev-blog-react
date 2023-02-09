import updateProfile from "../../services/updateProfile";

export function actUpdateProfileAsync(data, token) {
  return async () => {
    try {
      const response = await updateProfile.updateMedia(data, token);
      console.log(response);
      return { ok: true };
    } catch (error) {
      console.log(error.message);
      return { ok: false, message: "Posting A New Comment Is Wrong" };
    }
  };
}
