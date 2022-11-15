import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const [toggleMenu, setToggleMenu] = useState(false);

  const dataMenu = useSelector((state) => state.menuReducer.listMenu);
  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  return (
    <div className="tcl-col-6">
      {/* Main - Menu */}
      <div className="header-nav" id="main-menu">
        <ul className="header-nav__lists">{dataMenu.map(renderMenuLevel)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
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

      {/* <div
        className={`container-mobile-menu ${toggleMenu ? "active" : ""}`}
        onClick={handleToggleMenu}
      >
        <div className="close-menu" onClick={handleToggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-menu_list">
          <ul className="mobile-menu-item">{dataMenu.map(renderMenuLevel)}</ul>
        </div>
      </div> */}
    </div>
  );
}
export default HeaderMenus;
