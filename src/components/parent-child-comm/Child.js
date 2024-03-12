
const Child = (props) => {
    return (
        <div>
            <button onClick={props.propGreetHandler}>Greet Parent</button>

            <button onClick={() => props.messageFromChild({ message: "Hello Parents." })}>Message to Parents</button>
            <p>{"From Child: <button onClick={() => props.messageFromChild({ message: 'Hello Parents.' })}>Message to Parents</button>"}</p>

        </div >
    )
}

export default Child