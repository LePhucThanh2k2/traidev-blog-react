import { api } from "./api";

const authService = {
  login: (username, password) => {
    return api.post(`/jwt-auth/v1/token`, {
      username,
      password,
    });
  },

  fetchMe: (token) => {
    return api.get(`/wp/v2/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default authService;
