import axios from "axios"
import { useEffect, useState } from 'react'
import { TableUserComp } from "./tableUser"

export const UserComponent = () => {
    const [user, setUser] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:2000/users")
            setUser(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2>Data User</h2>
            <TableUserComp user={user} />
        </div>
    )
}