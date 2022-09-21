import axios from "axios";
import swal from "sweetalert";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();

    setLogin({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/login", data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Успешно", res.data.message, "success");
          navigate("/admin");
        } else if (res.data.status === 401) {
          swal("Внимание", res.data.message, "warning");
        } else {
          setLogin({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  const errorEmailActive = loginInput.error_list.email ? "has-error" : "";
  const errorPasswordActive = loginInput.error_list.password ? "has-error" : "";

  return (
    <div className="containter">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4">
          <form onSubmit={loginSubmit}>
            <div className={`form-group ${errorEmailActive}`}>
              <label>Email </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={loginInput.email}
                className="form-control"
                placeholder="Введите email"
              />
              <span>{loginInput.error_list.email}</span>
            </div>
            <div className={`form-group ${errorPasswordActive}`}>
              <label>Пароль</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={loginInput.password}
                className="form-control"
                placeholder="Введите пароль"
              />
              <span>{loginInput.error_list.password}</span>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
