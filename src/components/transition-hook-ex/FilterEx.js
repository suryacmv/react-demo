

import { useState, useTransition } from 'react';
import data from './data.json';

const FilterEx = () => {
    const [query, setQuery] = useState('')
    const [searchText, setSearchText] = useState('')
    const [isPending, startTransition] = useTransition();

    const handleQuery = (e) => {
        setSearchText(e.target.value.toLowerCase())
        startTransition(() => setQuery(e.target.value.toLowerCase()));
    }
    const filteredNames = data.filter(name => {
        return name.first_name.toLowerCase().includes(query)
            || name.last_name.toLowerCase().includes(query);
    })
    return (
        <div>
            <p>
                <h3>Total users {data.length} </h3>
                <h4>Filtered: {filteredNames.length}</h4>
            </p>
            <p>
                <label>Search User </label>
                <input value={searchText} onChange={handleQuery} />
            </p>

            {isPending ? <div>Loading ... </div> :
                <table style={{ border: "2px solid green" }}>
                    <thead>
                        <tr>
                            <th>F Name</th>
                            <th>L Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            filteredNames.map(user => {
                                return <tr key={user.id}>
                                    <td style={{ border: "1px solid green" }}>{user.first_name}</td>
                                    <td style={{ border: "1px solid green" }}> {user.last_name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default FilterEx