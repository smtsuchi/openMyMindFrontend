import React from "react"
import "../../css/auth/SignUp.css"

const registerUser = async (e) => {
    e.preventDefault();
    console.log('about to post sign up req');
    // call should be to whatever port your Django backend is hosted at
    let res = await fetch('http://localhost:8000/users/signup', {
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "username": e.target.username.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
            "confirm_pass": e.target.confirm_pass.value
        })
    });
    let userDetails = await res.json();
    // this.setState({ redirect: `/myinfo`}) REDIRECT TO MY INFO PAGE
    console.log("response recieved : ")
    console.log(userDetails);
};

const SignUp = () => {
    return (
        <div className="">
            <form className="signup-grid" onSubmit={(e) => registerUser(e)}>
                <h1 className="signup-label">Sign Up:</h1>
                <input type="text" className="form-control signup-firstname" name="first_name" placeholder="First Name" />
                <br/>
                <input type="text" className="form-control signup-lastname" name="last_name" placeholder="Last Name" />
                <br/>
                <input type="text" className="form-control  signup-username" name="username" placeholder="Username" />
                <br/>
                <input type="text" className="form-control signup-email" name="email" placeholder="Email" />
                <br/>
                <input type="password" className="form-control signup-password" name="password" placeholder="Password" />
                <br/>
                <input type="password" className="form-control signup-confirmpass" name="confirm_pass" placeholder="Confirm Password" />
                <br/>
                <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    )
};

export default SignUp