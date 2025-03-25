import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => {
            console.log(data.data);
            
            setUsers(data.data)})
        .catch(err => console.log(err)
        )
    }, []);

    return (
        <>
        <ul>
        {users.map(x => <li key={x.id}>{x.email} </li>)}
        </ul>
        </>
    );
}

export default Users;