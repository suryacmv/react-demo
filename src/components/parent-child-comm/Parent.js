

import Child from './Child';

const Parent = () => {
    const funGreetParent = () => {
        alert("Hello Parent");
    }

    const sendMessageFromChild = (props) => {
        alert(`Message from Child: ${props.message}`);
    }
    return (
        <div style={{ padding: "20px" }}>
            <h3>Child to Parent - Communication</h3>
            <p>Passing parent's <code><i>greetParent</i></code> function name as propertyValue,
                which can be accessed using <code>{"{props.propertyName}"}"</code> in child component</p>

            <p>child component can invoke parent's function through props,
                while parent can share the function name through attribute definition while using child compoenent.</p>
            <p>{"Ex: <Child propGreetHandler={funGreetParent} messageFromChild={sendMessageFromChild} />"}</p>

            <Child propGreetHandler={funGreetParent} messageFromChild={sendMessageFromChild} />
            <hr />
        </div>

    )
}

export default Parent;