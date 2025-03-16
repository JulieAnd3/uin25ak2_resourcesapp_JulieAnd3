import { Link, NavLink } from "react-router-dom";
import "../assets/styles/navStyles.scss";

export default function Nav(){
    return (
        <>
        <header>
            <nav>
            <ul>
                <li><NavLink to="/HTML" className={({ isActive }) => (isActive ? "white" : "")}> HTML</NavLink></li>
                <li><NavLink to="/CSS" className={({ isActive }) => (isActive ? "white" : "")}> CSS</NavLink></li>
                <li><NavLink to="/JavaScript" className={({ isActive }) => (isActive ? "white" : "")}> Javascript</NavLink></li>
                <li><NavLink to="/React" className={({ isActive }) => (isActive ? "white" : "")}> React</NavLink></li>
                <li><NavLink to="/Sanity and headless CMS" className={({ isActive }) => (isActive ? "white" : "")}>Sanity and headless CMS</NavLink></li>
            </ul>
            </nav>
        </header>
        </>
    )
}