import { useParams } from "react-router-dom"
import Page from "./Page"


export default function PageTitle({resources}){
    const {slug} = useParams()
    console.log(slug)


    return(
        <>
        {resources.filter((res)=> res.category === slug)
            .map((rescource) => (
            <Page key={rescource.category} 
            category={rescource.category} 
            text={rescource.text} 
            sources={rescource.sources}/>))}
         </>
    )
}

