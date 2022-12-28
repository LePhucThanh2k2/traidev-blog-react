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
  changPassword: (token, password, newPassword, confirmNewPassword) => {
    console.log(token);
    console.log(password);
    console.log(newPassword);
    console.log(confirmNewPassword);
    return api.get(`/wp/v2/users/password`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      password: password,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    });
  },
};
export default authService;
