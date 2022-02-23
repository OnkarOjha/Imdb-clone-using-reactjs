import React, { useState , useEffect } from "react";
import Image from "../hero.jpg"
import axios from "axios";
import { Oval } from  'react-loader-spinner'
import Pagination from "./Pagination";


function Movies(){

    


    const [movies , setMovies] = useState([]);
    const[page , setPage] = useState(1);
    const [hover , setHover] = useState('');
    const [favourites , setFavourites] = useState([]);

    function goAhead(){
        setPage(page +1)
    }

    function goBehind(){
        if(page>1)
        {
            setPage(page -1)
        }
        
        
    }
    useEffect(function(){
        
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=9539e14f1de22d051f712bff99eeee51&page=${page}`).then((res) => 
        {
            console.table(res.data.results)
            setMovies(res.data.results);
            let oldfav = localStorage.getItem("imdb");
            oldfav = JSON.parse(oldfav)
            setFavourites([...oldfav])
        }
        
        )
        
        
    },[page]);

    let add = (movies)=>{
        let newArray = [...favourites , movies] // purana waala array liya 3 dots sei or usme fr aoni new wali valuedal di 
        setFavourites([...newArray]);
        console.log(newArray)
        localStorage.setItem("imdb" , JSON.stringify(newArray) ) // local storage m add krna
    }

    let del = (movie)=>{
        let newArray = favourites.filter((m)=> m.id!=movies.id)
        setFavourites([...newArray])//favorite delete krna 
        localStorage.setItem("imdb" , JSON.stringify(newArray) )

    }

   
    



    return(
        <div className="w-full flex flex-col justify-center mb-8"> 
            <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
            {
                //react-loader
                movies.length === 0 ?
                <div className="flex justify-center">
                <Oval
                height="100"
                width="100"
                color='grey'
                secondaryColor="grey"
                ariaLabel='loading'
              /> </div>:
            
                <div className="flex flex-wrap justify-center">
                {
                    movies.map((movie)=>(

                        <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})]
                        md:h-[30vh] md:w-[250px]
                        h-[25vh] w-[150px]
                        bg-center
                        bg-cover
                        rounded-xl
                        flex items-end 
                        m-4
                        hover:scale-110
                        ease-out duration-300
                        text-xl
                        relative
                        
                        `}
                        //adding functionality such as when we hover over a specific object it will show us the fav icon
                        onMouseEnter = {()=>setHover(movie.id)}

                        onMouseLeave={()=>setHover("")}
                        
                        
                        
                        
                        >
                            {
                                hover == movie.id && <>
                                {
                                    !favourites.find((m)=>m.id == movies.id) ? <div className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl
                                    cursor-pointer"
                                    onClick={()=>add(movies)}>💕</div> : <div className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl
                                    cursor-pointer"
                                    onClick={()=>del(movies)}>❌</div>
                                }
                                
                                
                                </>


                            }
                            
                            <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl">
                                {movie.title}
                            </div>
                            

                </div>

                    ))
                }
                
                
                
                
               
                

                </div>

            }
                
                <Pagination pageProp={page}
                goBack = {goBehind} 
                goAhead = {goAhead}
                
                
                
                />
            
        </div>
        
        
        
        
        
        

    );


}
export default Movies;