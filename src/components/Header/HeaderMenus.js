import { useSelector } from "react-redux";

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
  const dataMenu = useSelector((state) => state.menuReducer.listMenu);
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{dataMenu.map(renderMenuLevel)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <a href="/login">
              <i className="icons ion-person" /> Tài khoản
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
