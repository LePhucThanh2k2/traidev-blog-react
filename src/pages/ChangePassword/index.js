import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/shared/Input";
import { handleFormValidation } from "../../helper";
import { useNotAuthenticated } from "../../hook/useNotAuthenticated";
import { actChangePasswordAsync, actLoginAsync } from "../../store/auth/action";
import "./main.css";
function ChangePassword() {
  useNotAuthenticated();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [formError, setFormError] = useState("");
  const [isDirtyForm, setIsDirtyForm] = useState(false);
  const [formData, setFormData] = useState({
    password: {
      value: "",
      error: "",
    },
    newPassword: {
      value: "",
      error: "",
    },
    confirmNewPassword: {
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
        password: {
          value: "",
          error: handleFormValidation({ value: "", name: "password" }),
        },
        newPassword: {
          value: "",
          error: handleFormValidation({ value: "", name: "password" }),
        },
        confirmNewPassword: {
          value: "",
          error: handleFormValidation({ value: "", name: "confirmPassword" }),
        },
      });
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const password = formData.password.value;
    const newPassword = formData.newPassword.value;
    const confirmPassword = formData.confirmNewPassword.value;
    const isValidate = checkFormIsValid();
    if (isValidate) {
      dispatch(
        actChangePasswordAsync(token, password, newPassword, confirmPassword)
      );
      console.log("Success", formData);
    }
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Change Password</h1>
            <h2 className="alert">{formError}</h2>
            <div className="form-login-register">
              <form onSubmit={handleSubmit}>
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
                <Input
                  name="newPassword"
                  value={formData.newPassword.value}
                  textNotification={formData.newPassword.error}
                  label="newPassword"
                  placeholder="Enter newPassword ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  onChange={handleChange}
                />
                <Input
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword.value}
                  textNotification={formData.confirmNewPassword.error}
                  label="confirmNewPassword"
                  placeholder="Enter confirmNewPassword ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                  onChange={handleChange}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button
                    className="btn btn-primary btn-size-large"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
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
export default ChangePassword;
