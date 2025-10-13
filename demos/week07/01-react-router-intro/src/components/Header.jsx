import { Link } from "react-router"

export const Header = () => {
    return (
        <header>
            {/* Anchor tags will cause a full page refresh */}
            <a href='/about'>About</a>
            {/* If you're linking to something within your own website, use the Link component provided by react-router */}
            <Link  to='/'> Home</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}