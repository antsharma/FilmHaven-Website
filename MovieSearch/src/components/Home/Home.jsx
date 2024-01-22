import React from 'react'
import CardPage from '../CardPage/CardPage'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound'
import "./Home.css"
function Home({movies}) {
  return (
   <>
      
       <div className="Home">
       
       {movies?.length ?  (movies.map((movieData,index)=>{
          return <CardPage movieData={movieData} key={index} />
         })
 
         ) : (
           <>
           <NoMoviesFound/>
           </>
         )
       }
     
   </div>
 
   </>
  )
}

export default Home
