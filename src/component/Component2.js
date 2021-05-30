import React from "react"

const Component2 = () => {
    return (
        <div className="">
            <form onSubmit={(e) => this.props.login(e)}>
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

export default Component2