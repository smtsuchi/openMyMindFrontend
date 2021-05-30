import React from "react"

const loginUser = async (e) => {
    e.preventDefault();
    console.log('about to post sign up req');
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
    console.log("response recieved : ")
    console.log(userDetails);
};

const Login = () => {
    return (
        <div className="">
            <form onSubmit={(e) => loginUser(e)}>
                <h1>Login:</h1>
                <input type="text" className="form-control" name="username" placeholder="Username" />
                <br/>
                <input type="password" className="form-control" name="password" placeholder="Password" />
                <br/>
                <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    )
}

export default Login