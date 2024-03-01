import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div>
            <h1>INI HOMEPAGE</h1>
            <Link to={"/about"} >About Page</Link>
            <button>profile</button>
        </div>
    )
}