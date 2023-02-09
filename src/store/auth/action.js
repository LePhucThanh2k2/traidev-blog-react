import authService from "../../services/auth";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_REGISTER = "ACT_REGISTER";
export const ACT_FETCH_ME = "ACT_FETCH_ME";
export const ACT_GET_USER = "ACT_GET_USER";
export const ACT_LOGOUT = "ACT_LOGOUT";
export const ACT_LOGIN_SUCCESS = "ACT_LOGIN_SUCCESS";
export const ACT_CHANGE_PASSWORD = "ACT_CHANGE_PASSWORD";

export function actLogin(data) {
  return { type: ACT_LOGIN, payload: { data } };
}

export function actFetchMe(data) {
  return { type: ACT_FETCH_ME, payload: { data } };
}

export function actLogout() {
  return {
    type: "ACT_LOGOUT",
  };
}
export function actLoginSuccess(token, user) {
  return { type: ACT_LOGIN_SUCCESS, payload: { token, user } };
}
export function actGetAvtUser(data) {
  return { type: ACT_GET_USER, payload: { data } };
}
// ACT ASYNC
export function actGetUserAsync(token) {
  return async (dispatch) => {
    if (token === undefined) {
      token = localStorage.getItem("token");
    }
    try {
      const response = await authService.fetchMe(token);
      const data = response.data["simple_local_avatar"].full;
      dispatch(actGetAvtUser(data));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Username And Password Incorrect" };
    }
  };
}

export function actFetchMeAsync(token) {
  return async (dispatch) => {
    if (token === undefined) {
      token = localStorage.getItem("token");
    }
    try {
      const response = await authService.fetchMe(token);
      const user = response.data;
      dispatch(actLoginSuccess(token, user));

      return { ok: true };
    } catch (error) {
      dispatch(actLogout());
      return { ok: false, message: "Username And Password Incorrect" };
    }
  };
}
export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch(actFetchMeAsync(token));
      // dispatch(actLogin(response.data));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "The Username And Password Is Incorrect" };
    }
  };
}
export function actRegisterAsync(email, username, password, nickname) {
  return async (dispatch) => {
    try {
      await authService.register(email, username, password, nickname);
      dispatch(actLoginAsync(username, password));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Registration Failed" };
    }
  };
}
// ACT Change password
export function actChangePasswordAsync(
  token,
  password,
  newPassword,
  confirmNewPassword
) {
  return async (dispatch) => {
    try {
      await authService.changePassword(
        token,
        password,
        newPassword,
        confirmNewPassword
      );
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Change Password Failed" };
    }
  };
}
