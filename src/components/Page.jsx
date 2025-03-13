import { Link } from "react-router-dom";

export default function Page({category, text, sources}){
    

    return(
        <>
        <article>
            <h2>{category}</h2>
            <p>{text}</p>
            <ul>
                {sources.map((source,)=> 
                <li key={source.url}><Link to={source.url}>{source.title}</Link></li>)}
            </ul>
        </article>
    </>
    )
}