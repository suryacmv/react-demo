


const ListComponent = () => {
    const list = ["one", "two", "three"];
    return (
        <div>
            <h3>Iterate a loop </h3>
            <ol>
                {
                    list.map(name => {
                        return <li key={name}> {name}</li>
                    })
                }
            </ol>
            <hr />
        </div>
    )
}

export default ListComponent