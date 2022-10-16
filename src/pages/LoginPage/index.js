import Input from "../../components/shared/Input";
import "./main.css";
function LoginPage() {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form action>
                <Input
                  label="Username"
                  placeholder="Enter Username ..."
                  type="text"
                />
                <Input
                  label="Password"
                  placeholder="Enter Password ..."
                  type="password"
                  icon={<i className="toggle-password ion-eye" />}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">
                    Submit
                  </button>
                  <a href="/register">Regiter</a>
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
