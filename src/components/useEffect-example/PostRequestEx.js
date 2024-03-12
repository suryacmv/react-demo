import { useState } from "react";



const PostRequestEx = () => {

    const userModel = {
        userId: '',
        title: '',
        body: ''
    }

    const [user, setUser] = useState(userModel);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: user.title,
                body: user.body,
                userId: user.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }
    const populateUser = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        if ("title" === name)
            setUser({ ...user, title: value });
        else if ("userId" === name)
            setUser({ ...user, userId: value });
        else
            setUser({ ...user, body: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>UserId: </label>
                <input name="userId" value={user.userId} onChange={populateUser} />
            </div>
            <div>
                <label>Title: </label>
                <input name="title" value={user.title} onChange={populateUser} />
            </div>
            <div>
                <label>Description: </label>
                <input name="body" value={user.body} onChange={populateUser} />
            </div>
            <button>Save</button>
        </form>
    )
}

export default PostRequestEx