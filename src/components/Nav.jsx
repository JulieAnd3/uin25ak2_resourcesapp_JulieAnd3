import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <>
        <header>
            <nav>
            <ul>
                <li><Link to="pagetitle">PageTitle </Link></li>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="javascript">Javascript</Link></li>
                <li><Link to="react_sanity">React og Sanity</Link></li>
            </ul>
            </nav>
        </header>
        </>
    )
}