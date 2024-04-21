import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await response.json();
    console.log(credentials);
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  return (
    <>
      <div className="container my-5 p-5">
        <h1 className="text-center">SignUp Form</h1>
        <br />
        <form
          onSubmit={handleSubmit}
          className="w-50 m-auto m-5 p-5 border bg-dark border-success rounded"
        >
          <div className="form-group my-3">
            <label htmlFor="exampleInputName1">Name</label>
            <input
              type="text"
              className="form-control mt-1"
              id="exampleInputName1"
              placeholder="Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="exampleInputEmail1"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputLocation">Location</label>
            <input
              type="text"
              className="form-control mt-1"
              id="exampleInputLocation"
              placeholder="Location"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-success my-3">
            Create Account
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
