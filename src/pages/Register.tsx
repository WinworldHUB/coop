import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import auth from './auth-login-illustration-light.png'

function Register() {
  const Authlogo = "auth-register-illustration-light.png";
  const AuthlogoBg = "bg-shape-image-light.png";
  return (
    <>
      <div className="row m-0">
        <div className="col-7 m-0">
          <div
            style={{ background: "#f8f7fa", height: "85vh" }}
            className="d-flex justify-content-center align-items-center m-5 rounded-5"
          >
            <img src={Authlogo} alt="log" className="w-50" />
            <img
              src={AuthlogoBg}
              alt="log"
              className="position-absolute w-100"
              style={{ bottom: "0", left: "0", height: "35%" }}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="m-5">
            <h3 className="mb-1">Adventure starts here 🚀</h3>
            <p className="mb-4">Make your app management easy and fun!</p>
            <form>
              <div className="form-group mb-4">
                <label className="pb-2">Username</label>
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mb-4">
                <label className="pb-2">Email</label>
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-4">
                  <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="exampleInputPassword1"
                  placeholder="********"
                />
                {/* <span className="input-group-text">
                  <i
                    className="fa fa-eye"
                    id="togglePassword"
                    style={{ cursor: "pointer" }}
                  ></i>
                </span> */}
                </div>
              <div className="form-group form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input p-2 border-3"
                  id="exampleCheck1"
                />
                            <p>
              <span className="mx-2">I agree to</span>
              <a
                href="auth-register-cover.html"
                className="text-decoration-none"
              >
                <span>privacy policy & terms</span>
              </a>
            </p>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-4"
                style={{ width: "100%" }}
              >
                <h5>Sign In</h5>
              </button>
            </form>
            <p className="text-center">
              <span>Already have an account? </span>
              <a
                href="auth-register-cover.html"
                className="text-decoration-none"
              >
                <span>Sign in instead</span>
              </a>
            </p>
            <div className="divider my-4">
              <div className="divider-text text-center">or</div>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="javascript:;"
                className="btn btn-icon btn-label-facebook me-3 waves-effect"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-facebook text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              <a
                href="javascript:;"
                className="btn btn-icon btn-label-google-plus me-3 waves-effect"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-google text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>{" "}
              </a>

              <a
                href="javascript:;"
                className="btn btn-icon btn-label-twitter waves-effect"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-twitter-x text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Sign In</h1> */}
    </>
  );
}

export default Register;
