import {Link} from "@tanstack/react-router";

export const HeaderSection = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}