import { Link } from "react-router-dom";

export default function Layout({children}){
    return(
    <>
       <header>
            <nav>
              <Link to="/home">Hjem</Link>
              <Link to="/test">Test</Link>
            </nav>
       </header>
       {children}
    </>
    )
}