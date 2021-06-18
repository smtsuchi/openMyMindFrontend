import React from "react";
import { Link } from 'react-router-dom';
import "../../css/Home.css"

const Home = (props) => {
    // Logged In
  if (props.user) {
      console.log(props.user);
      console.log(props.handleLogout)
    return (
        <div>
            <div>{props.user.username} is loggged in</div>
            <button className="btn" onClick={props.handleLogout}>logout</button>
        </div>
    );
  }
  // Logged out
    return (
        <div>
            <div className="flexbox">
                <div className="home_image">
                    
                </div>
                <div className="home_flex">
                    <h1 className="home_h1">Open up to a world of possibilities</h1>
                    <h3 className="home_h3">Join today.</h3>
                    <Link className="nav-link active btn" aria-current="page" to="/auth/login">Login</Link>
                    <Link className="nav-link active btn" aria-current="page" to="/auth/signup">Sign Up</Link>
                </div>
            </div>
            <div className="footnote">
                <a href="" >About</a>
            </div>
        </div>
    )
}

export default Home