import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">단어장</Link>
                        <Link to="/dictionary">사전</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;