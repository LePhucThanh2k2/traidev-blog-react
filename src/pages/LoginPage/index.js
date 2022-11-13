import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import { handleFormValidation } from "../../helper";
import "./main.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
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
        error: handleFormValidation({ value, name }),
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
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  value={formData.username.value}
                  textNotification={formData.username.error}
                  label="Username"
                  placeholder="Enter Username ..."
                  type="text"
                  onChange={handleChange}
                />
                <Input
                  name="password"
                  value={formData.password.value}
                  textNotification={formData.password.error}
                  label="Password"
                  placeholder="Enter Password ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  onChange={handleChange}
                  // onClick={handleClickForm}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">
                    Submit
                  </button>
                  <Link to="/register">Register</Link>
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
export default LoginPage;
