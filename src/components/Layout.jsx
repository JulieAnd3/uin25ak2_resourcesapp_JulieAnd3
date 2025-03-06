import { Link } from "react-router-dom";

export default function Layout(){
    return(
    <>
       <header>
            <nav>
                <ul>
                    <li>
                        <Link to="html">HTML</Link>
                    </li>
                    <li>
                        <Link to="css">CSS</Link>
                    </li>
                </ul>
            </nav>
       </header>
    </>
    )
}