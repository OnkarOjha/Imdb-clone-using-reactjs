import React ,{useState , useEffect} from "react";
import Hero from "../hero.jpg";
import axios from "axios";

function Banner(){

    const [movies , setMovies] = useState({});
    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=9539e14f1de22d051f712bff99eeee51").then((res) => 
        {
            console.table(res.data.results)
            setMovies(res.data.results[1]);
        }
        
        )
        
        
    },[]);


    return <>
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})]
    h-[40vh]
    md:h-[60vh] 
    bg-center
    bg-cover
    flex items-end justify-center
    `}>
        
        <div className="text-xl
        md:text-3xl
        text-white
        p-4
        bg-gray-900
        bg-opacity-50
        w-full
        flex justify-center
        ">{movies.title}</div>
            
        


    </div>

    
    
    
    
    
    </>;
}

export default Banner;