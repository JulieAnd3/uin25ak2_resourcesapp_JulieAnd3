import { Link } from "react-router-dom";
import "../assets/styles/navStyles.scss";

export default function Nav(){
    return (
        <>
        <header>
            <nav>
            <ul>
                <li><Link to="/HTML">HTML</Link></li>
                <li><Link to="/CSS">CSS</Link></li>
                <li><Link to="/JavaScript">Javascript</Link></li>
                <li><Link to="/React">React</Link></li>
                <li><Link to="/Sanity and headless CMS">Sanity and headless CMS</Link></li>
            </ul>
            </nav>
        </header>
        </>
    )
}