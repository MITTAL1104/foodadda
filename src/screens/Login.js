import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    const json = await response.json();
    // console.log(credentials);
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    else {
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  }



  return (
    <>
      <div className="container my-5 p-5">
        <h1 className="text-center my-4">Login Page</h1>
        <form className='w-50 m-auto m-5 p-5 border bg-dark border-success rounded' onSubmit={handleSubmitLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control mt-1" id="exampleInputEmail1" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-success my-3">Login</button>
          <Link to="/signup" className="m-3 btn btn-danger">New User?</Link>

        </form>
      </div>
    </>
  )
}
// "email":"nitin1993@gmail.com",
  // "password":"bhasinNitin93",
export default Login
