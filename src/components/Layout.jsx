import Nav from './Nav'


export default function Layout({children}){
    return(
    <>
  
      <Nav/>
        <main>
          <article>
          {children}
          </article>
        </main>
   
    </>
    )
}