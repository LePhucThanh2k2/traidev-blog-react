import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import "./main.css";
function LoginPage() {
  const [infoUser, setInfoUser] = useState({
    username: "",
    password: "",
  });
  const [textNotification, setTextNotification] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setInfoUser({
      ...infoUser,
      [name]: value,
    });
  }
  console.log(textNotification);

  function handleSubmit(e) {
    e.preventDefault();
    if (true) {
      setTextNotification({
        ...textNotification,
        username: "Please enter username above 6 characters ",
      });
    }
    if (true) {
      setTextNotification({
        ...textNotification,
        password: "Please enter password above 6 characters ",
      });
    }
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
                  value={infoUser.username}
                  textNotification={textNotification.username}
                  label="Username"
                  placeholder="Enter Username ..."
                  type="text"
                  onChange={handleChange}
                />
                <Input
                  name="password"
                  value={infoUser.password}
                  textNotification={textNotification.password}
                  label="Password"
                  placeholder="Enter Password ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  onChange={handleChange}
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
