import { api } from "./api";

const authService = {
  login: (username, password) => {
    return api.post(`/jwt-auth/v1/token`, {
      username,
      password,
    });
  },
  register: (email, username, password, nickname) => {
    return api.post(`/wp/v2/users/register`, {
      email,
      username,
      password,
      nickname,
    });
  },
  fetchMe: (token) => {
    return api.get(`/wp/v2/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  changePassword: (token, password, newPassword, confirmNewPassword) => {
    return api.put(
      `/wp/v2/users/password`,
      {
        password: password,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
export default authService;
