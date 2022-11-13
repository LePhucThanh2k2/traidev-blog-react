import "./input.css";
import cls from "classnames";
import { useState } from "react";
import IconSearch from "../IconSearch";

function Input({
  textNotification,
  label,
  type = "text",
  className,
  icon = <IconSearch />,
  ...restProps
}) {
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }

  const classesIcon = cls("toggle-password", {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });
  const classesSearch = cls("input-search__input", className);

  if (type === "search") {
    return (
      <div className="input-search">
        {icon}
        <input className={classesSearch} type={localType} {...restProps} />
      </div>
    );
  }

  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      <div className="group-form">
        <input type={localType} className={className} {...restProps} />
        {type === "password" && (
          <i className={classesIcon} onClick={handleToggleShowPwd}></i>
        )}
      </div>
      {textNotification && (
        <span className="notification">
          <i className="fa-solid fa-circle-exclamation"></i>
          &nbsp;
          {textNotification}
        </span>
      )}
    </div>
  );
}

export default Input;
