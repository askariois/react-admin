import axios from "axios";
import swal from "sweetalert";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();

    setRegister({
      ...registerInput,
      [e.target.name]: e.target.value,
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.email,
      email: registerInput.email,
      password: registerInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("http://spa-laravel.loc/api/register", data).then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Успешно", res.data.message, "success");
          navigate("/admin");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  const errorEmailActive = registerInput.error_list.email ? "has-error" : "";
  const errorPasswordActive = registerInput.error_list.password
    ? "has-error"
    : "";

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-5 mt-5">
          <div className="card">
            <div className="card-header">
              <div className="card-title text-center">Регистрация</div>
            </div>
            <form onSubmit={registerSubmit}>
              <div className={`form-group ${errorEmailActive}`}>
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
                  className="form-control"
                  placeholder="Введите email"
                />
                <span>{registerInput.error_list.email}</span>
              </div>
              <div className={`form-group ${errorPasswordActive}`}>
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  className="form-control"
                  placeholder="Введите пароль"
                />
                <span>{registerInput.error_list.password}</span>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-success">
                  Регистрация
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
