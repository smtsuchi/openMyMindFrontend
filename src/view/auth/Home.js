import React from "react";
import { Link } from 'react-router-dom';

const Home = (props) => {
    // Logged In
  if (props.user.username) {
      console.log(props.user);
      console.log(props.handleLogout)
    return (
        <div>
            <div>{props.user.username} is loggged in</div>
            <button onClick={props.handleLogout}>logout</button>
        </div>
    );
  }
  // Logged out
    return (
        <div className="">
            <Link className="nav-link active" aria-current="page" to="/auth/login">Login</Link>
            <Link className="nav-link active" aria-current="page" to="/auth/signup">Sign Up</Link>
        </div>
    )
}

export default Home