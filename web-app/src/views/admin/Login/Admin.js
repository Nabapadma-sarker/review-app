import React, { useState } from "react";
import "./Admin.css";
import Card from "../../../components/Card/Card";

const Login = (props) => {
  const [employeeLogin, setEmployeeLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  const { username, password } = employeeLogin;

  // onSubmit handler
  const onSubmit = (event) => {
    event.preventDefault();

    if (username === "") {
      return setError({
        username: "Username or Email is required",
      });
    }

    if (password === "") {
      return setError({
        password: "Password is required",
      });
    }

    props.history.push("/admin/employees");

    setEmployeeLogin({
      username: "",
      password: "",
    });
  };

  // input onChange handler
  const onChange = (event) => {
    const { name, value } = event.target;
    setEmployeeLogin({
      ...employeeLogin,
      [name]: value,
    });
  };

  return (
    <div className="admin-wrapper">
      <div className="login-wrapper">
        <Card>
          <div className="employee-login">
            <img
              src="https://image.paypay.ne.jp/page/common/images/img_logo.png"
              alt="Logo"
            />

            <h4 className="login-heading">
              Login to review employee performance
            </h4>

            <form className="employee-login-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username/Email</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  placeholder="example@example.com"
                  onChange={onChange}
                  className={error.username ? "is-invalid" : ""}
                  autoFocus
                />
                <sub
                  className={error.username ? "invalid-feedback" : "is-valid"}
                >
                  {error.username}
                </sub>
              </div>

              <div className="form-group-admin">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="******"
                  onChange={onChange}
                  className={error.password ? "is-invalid" : ""}
                />
                <sub
                  className={error.password ? "invalid-feedback" : "is-valid"}
                >
                  {error.password}
                </sub>
              </div>

              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
