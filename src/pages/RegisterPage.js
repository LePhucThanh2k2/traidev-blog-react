import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/shared/Input";
import { handleFormValidation } from "../helper";

import "./LoginPage/main.css";
function RegisterPage() {
  const [formData, setFormData] = useState({
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
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nikcname ..."
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
