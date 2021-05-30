import React from "react"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="">
            <Link className="nav-link active" aria-current="page" to="/auth/login">Login</Link>
            <Link className="nav-link active" aria-current="page" to="/auth/signup">Sign Up</Link>
        </div>
    )
}

export default Home