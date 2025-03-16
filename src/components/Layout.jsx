import Nav from './Nav'
import "../assets/styles/mainStyles.scss";



export default function Layout({children}){
    return(
    <>
  
      <Nav/>
        <main>
         
          {children}
          
        </main>
   
    </>
    )
}