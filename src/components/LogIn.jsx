import React, { useState } from "react";

function LogIn(props) {
  const [email, setEmail] = useState(""); // State for email value
  const [password, setPassword] = useState(""); // State for password value
  const [showAlert, setShowAlert] = useState(false); // Sohw Alert State
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      props.onLogin();
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div className="login-wrapper">
        {showAlert && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            You should enter your email and password.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        )}
        <div className="custom-section">
          <div className="my-form">
            <h1 className="login-heading">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="my-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn cutstom-btn mt-5">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
