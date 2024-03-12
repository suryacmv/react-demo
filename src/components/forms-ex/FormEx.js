import { useState } from "react";

const userModel = {
    username: "",
    password: ""
}
const FormEx = () => {
    const [user, setUser] = useState(userModel);

    const submitHandler = (event) => {
        event.preventDefault();
        alert(user.username + " / " + user.password);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label>User Name: </label>
                    <input placeholder="user name" onChange={(event) => setUser({ ...user, username: event.target.value })} />
                </div><div>
                    <label>Password: </label>
                    <input type="password" placeholder="password" onChange={(event) => setUser({ ...user, password: event.target.value })} />
                </div><div>
                    <button>Submit</button>
                </div>
            </form>
            <h3>{user.username} / {user.password}</h3>
        </div>

    )
}

export default FormEx