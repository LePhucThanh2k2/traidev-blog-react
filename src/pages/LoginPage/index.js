import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import "./main.css";
function LoginPage() {
  // const [infoUser, setInfoUser] = useState({
  //   username: "",
  //   password: "",
  // });
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

  // const [textNotificationForUsername, setTextNotificationForUsername] =
  //   useState(null);
  // const [textNotificationForPassword, setTextNotificationForPassword] =
  //   useState(null);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    let error = "";
    if (name === "username") {
      if (value === "") {
        error = "username not empty";
      } else if (value.length < 6) {
        error = "Please enter username above 6 characters";
      }
    }
    setFormData({
      ...formData,
      [name]: {
        value: value,
        error: error,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setTextNotificationForUsername(null);
    // setTextNotificationForPassword(null);
    // if (infoUser.username.length < 6) {
    //   setTextNotificationForUsername(
    //     "Please enter username above 6 characters"
    //   );
    // }
    // if (infoUser.password.length < 6) {
    //   setTextNotificationForPassword(
    //     "Please enter password above 6 characters"
    //   );
    // }
  }
  // function handleClickForm() {
  //   if (infoUser.username.length < 6) {
  //     setTextNotificationForUsername(
  //       "Please enter username above 6 characters"
  //     );
  //   }
  // }
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
                  textNotification={""}
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
