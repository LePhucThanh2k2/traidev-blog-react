import Input from "../components/shared/Input";

import "./LoginPage/main.css";
function RegisterPage() {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form action>
                <Input
                  label="Nickname"
                  placeholder="Nhập Nikcname ..."
                  type="text"
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  type="text"
                />
                <Input
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                />
                <Input
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">
                    Submit
                  </button>
                  <a href="/login">Login</a>
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
