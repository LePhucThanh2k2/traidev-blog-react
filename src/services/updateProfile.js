import { api } from "./api";

const updateProfile = {
  updateAvatar: (data, token) => {
    return api.put(`wp/v2/users/me`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateMedia: (data, token) => {
    return api.post(`/wp/v2/media`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default updateProfile;
