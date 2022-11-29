import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/shared/Input";
import { handleFormValidation } from "../../helper";
import { actLoginAsync } from "../../store/auth/action";
import "./main.css";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = JSON.parse(window.localStorage.getItem("token"));
  // Check loggedIn
  if (token) {
    history.push("/");
  }
  const [formError, setFormError] = useState("");
  const [isDirtyForm, setIsDirtyForm] = useState(false);
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

  // HANDLE EVENT
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
    setIsDirtyForm(true);
  }

  function checkFormIsValid() {
    if (!isDirtyForm) {
      setFormData({
        username: {
          value: "",
          error: handleFormValidation({ value: "", name: "username" }),
        },
        password: {
          value: "",
          error: handleFormValidation({ value: "", name: "password" }),
        },
      });
      return false;
    } else {
      if (formData.username.value === "") {
        setFormData({
          ...formData,
          username: {
            value: "",
            error: handleFormValidation({ value: "", name: "username" }),
          },
        });
        return false;
      }
      if (formData.password.value === "") {
        setFormData({
          ...formData,
          password: {
            value: "",
            error: handleFormValidation({ value: "", name: "password" }),
          },
        });
        return false;
      }
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValidate = checkFormIsValid();
    if (isValidate) {
      dispatch(
        actLoginAsync(formData.username.value, formData.password.value)
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
            <h1 className="form-title text-center">Login</h1>
            <h2 className="alert">{formError}</h2>
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
