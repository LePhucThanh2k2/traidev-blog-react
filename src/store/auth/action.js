import authService from "../../services/auth";

export const ACT_LOGIN = "ACT_LOGIN";
export const ACT_REGISTER = "ACT_REGISTER";
export const ACT_FETCH_ME = "ACT_FETCH_ME";

export function actLogin(data) {
  return { type: ACT_LOGIN, payload: { data } };
}

export function actFetchMe(data) {
  return { type: ACT_FETCH_ME, payload: { data } };
}

export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(token);
      dispatch(actFetchMe(response.data));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "The Token Is Incorrect" };
    }
  };
}

export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      window.localStorage.setItem("token", JSON.stringify(response.data.token));
      dispatch(actFetchMeAsync(response.data.token));
      dispatch(actLogin(response.data));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "The Username And Password Is Incorrect" };
    }
  };
}
export function actRegisterAsync(email, username, password, nickname) {
  return async (dispatch) => {
    try {
      const response = await authService.register(
        email,
        username,
        password,
        nickname
      );
      dispatch(actLoginAsync(username, password));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Registration Failed" };
    }
  };
}
