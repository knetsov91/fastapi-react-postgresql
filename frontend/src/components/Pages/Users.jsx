import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(0)
    useEffect(() => {
        getUsers().then(data => {
            console.log(data.data);
            
            setUsers(data.data)})
        .catch(err => {
            console.log(err)
            setError(err.status_code)
        })
    }, []);
    if (  error == 401) {
        return <h1>{error}</h1>
    }
    return (
        <>
        <ul>
        {users.length > 0 ? users.map(x => <li key={x.id}>{x.email} </li>) : "No users"}
        </ul>
        </>
    );
}

export default Users;