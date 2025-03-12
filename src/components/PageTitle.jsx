import { useParams } from "react-router-dom"


export default function PageTitle({resources}){
    const {slug} = useParams()
    console.log("Console log page title:", resources)


    return(
        <>
            <article>
                <h2></h2>
                <p>Tekst</p>
                <ul>
                    <li>Linker</li>
                </ul>
            </article>
        </>
    )
}

