

import { useEffect, useState } from 'react'

const UseEffectEx = () => {
    let [posts, setPosts] = useState([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => {
                //clg short cut for
                console.log("Failed due to: ", error);
            })

    }, [])
    console.log("all posts: ", posts)
    return (
        <div>
            <h3>useState and useEffect example</h3>
            <p style={{ color: "green" }}>using <b><i><code>{"https://jsonplaceholder.typicode.com/posts"} </code></i></b> to fetch the data</p>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default UseEffectEx