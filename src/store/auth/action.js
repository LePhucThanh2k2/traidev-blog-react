import authService from "../../services/auth";

export const ACT_LOGIN = "ACT_LOGIN";

export function actLogin(post) {
  return { type: ACT_LOGIN, payload: { post } };
}

export function actFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      const response = await authService.fetchMe(token);
      console.log("actFetchMeAsync response ", response);
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Username and Password incorrect" };
    }
    // const menuList = response.data.items;
    // dispatch(actGetMainMenu(menuList));
  };
}

export function actLoginAsync(username, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(username, password);
      console.log("actLoginAsync responses", response);
      dispatch(actFetchMeAsync(response.data.token));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: "Username and Password incorrect" };
    }
    // const menuList = response.data.items;
    // dispatch(actGetMainMenu(menuList));
  };
}
