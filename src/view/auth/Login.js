import React from "react";
import { Link } from 'react-router-dom';

const loginUser = async (e, handleLogin) => {
    e.preventDefault();
    console.log('about to post login req');
    // call should be to whatever port your Django backend is hosted at
    let res = await fetch('http://localhost:8000/users/login', {
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": e.target.username.value,
            "password": e.target.password.value
        })
    });
    let userDetails = await res.json();
    // this.setState({ redirect: `/myinfo`}) REDIRECT TO MY INFO PAGE
    console.log("response recieved : ");
    // console.log(typeof(handleLogin));
    // console.log(typeof(handleLogin.handleLogin));
    // console.log(handleLogin.handleLogin);
    handleLogin(userDetails);
};

const Login = (props) => {
    return (
        <div className="">
            <form onSubmit={(e) => loginUser(e, props.handleLogin)}>
                <h1>Login:</h1>
                <input type="text" className="form-control" name="username" placeholder="Username" />
                <br/>
                <input type="password" className="form-control" name="password" placeholder="Password" />
                <br/>
                <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </div>
    )
}

export default Login