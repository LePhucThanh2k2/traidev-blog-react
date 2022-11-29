import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/shared/Input";
import { handleFormValidation } from "../helper";
import { actRegisterAsync } from "../store/auth/action";

import "./LoginPage/main.css";
function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");
  const [isDirtyForm, setIsDirtyForm] = useState(false);
  const [formData, setFormData] = useState({
    email: {
      value: "",
      error: "",
    },
    nickname: {
      value: "",
      error: "",
    },
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    confirmPassword: {
      value: "",
      error: "",
    },
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: {
        value: value,
        error: handleFormValidation({ value, name, formData }),
      },
    });
    setIsDirtyForm(true);
  }

  function checkFormIsValid() {
    if (!isDirtyForm) {
      setFormData({
        email: {
          value: "",
          error: handleFormValidation({ value: "", name: "email" }),
        },
        nickname: {
          value: "",
          error: handleFormValidation({ value: "", name: "nickname" }),
        },
        username: {
          value: "",
          error: handleFormValidation({ value: "", name: "username" }),
        },
        password: {
          value: "",
          error: handleFormValidation({ value: "", name: "password" }),
        },
        confirmPassword: {
          value: "",
          error: handleFormValidation({ value: "", name: "confirmPassword" }),
        },
      });
      return false;
    } else {
      for (const key in formData) {
        checkInputIsEmpty(key);
      }
      return true;
    }
  }

  function checkInputIsEmpty(key) {
    if (formData[key].value === "") {
      formData[key].error = `${key} not empty`;
      setFormData({
        ...formData,
      });
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValidate = checkFormIsValid();
    if (isValidate) {
      dispatch(
        actRegisterAsync(
          formData.email.value,
          formData.username.value,
          formData.password.value,
          formData.nickname.value
        )
      ).then((res) => {
        if (res.ok) {
          history.push("/");
        } else {
          setFormError(res.message);
        }
      });
    } else {
      return;
    }
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <h2 className="alert">{formError}</h2>
            <div className="form-login-register">
              <form>
                <Input
                  label="Email"
                  placeholder="Nhập Email ..."
                  type="email"
                  name="email"
                  value={formData.email.value}
                  onChange={handleChange}
                  textNotification={formData.email.error}
                />
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname ..."
                  type="text"
                  name="nickname"
                  value={formData.nickname.value}
                  onChange={handleChange}
                  textNotification={formData.nickname.error}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  type="text"
                  name="username"
                  value={formData.username.value}
                  onChange={handleChange}
                  textNotification={formData.username.error}
                />
                <Input
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  name="password"
                  value={formData.password.value}
                  onChange={handleChange}
                  textNotification={formData.password.error}
                />
                <Input
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  name="confirmPassword"
                  value={formData.confirmPassword.value}
                  onChange={handleChange}
                  textNotification={formData.confirmPassword.error}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button
                    className="btn btn-primary btn-size-large"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}
export default RegisterPage;
