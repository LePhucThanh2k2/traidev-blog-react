import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actLogout } from "../../store/auth/action";

function renderMenuLevel(item) {
  let isHasChilds = false;
  if (item.hasOwnProperty("child_items")) {
    isHasChilds = true;
  }
  return (
    <li key={item.ID}>
      <a href="/">{item.title}</a>
      {isHasChilds && item.child_items.length > 0 && (
        <ul>{item.child_items.map(renderMenuLevel)}</ul>
      )}
    </li>
  );
}
function HeaderMenus() {
  // let usernameDefault = "Tài Khoản";

  const dispatch = useDispatch();

  // const [user, setUser] = useState({
  //   username: usernameDefault,
  // });

  const [toggleMenu, setToggleMenu] = useState(false);
  const dataMenu = useSelector((state) => state.menuReducer.listMenu);
  const infoAuthor = useSelector((state) => state.infoAuthorReducer.infoAuthor);

  // Display username after when login
  // useEffect(() => {
  //   if (infoAuthor.nickname) {
  //     setUser({
  //       username: infoAuthor.nickname,
  //     });
  //   }
  //   // Check Invalid Token

  // }, []);
  // Display username when refresh page
  // useEffect(() => {
  //   setUser({
  //     username: infoAuthor.nickname,
  //   });
  // }, [infoAuthor]);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  function handleLogout() {
    dispatch(actLogout());
    localStorage.removeItem("token");
  }
  function handleUpdateProfile() {}
  return (
    <div className="tcl-col-6">
      {/* Main - Menu */}
      <div className="header-nav" id="main-menu">
        <ul className="header-nav__lists">{dataMenu.map(renderMenuLevel)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to={`${"/login"}`}>
              <i className="icons ion-person" />{" "}
              {!infoAuthor ? "Tài khoản" : infoAuthor.nickname}
            </Link>
            {/* Not Login */}
            {/* {user.username === usernameDefault && (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )} */}
            {/* Have Been Login */}
            {infoAuthor && (
              <ul>
                <li onClick={handleLogout}>
                  <Link to="/">Logout</Link>
                </li>
                <li>
                  <Link to="/changePassword">Change Password</Link>
                </li>
                <li>
                  <Link to="/updateProfile">Update Profile</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile - Menu */}
      <div className="header-nav" id="mobile-menu">
        <ul className="header-nav__lists">
          <li className="user">
            <i className="fa-solid fa-sun"></i>
          </li>
          <li className="user">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li className="user" onClick={handleToggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </div>

      {/* Container Of Mobile Menu */}

      <div
        className={`container-mobile-menu ${toggleMenu ? "active" : ""}`}
        onClick={handleToggleMenu}
      >
        <div className="close-menu" onClick={handleToggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-menu_list">
          <ul className="mobile-menu-item">{dataMenu.map(renderMenuLevel)}</ul>
        </div>
      </div>
    </div>
  );
}
export default HeaderMenus;
