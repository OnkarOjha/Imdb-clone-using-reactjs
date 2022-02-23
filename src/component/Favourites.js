import React, { useEffect, useState } from "react";
import Pagination from "./Pagination"

function Favourite(){

    const[currentGenre , setCurrent]  = useState("All Genres");
    const [Favourites , setFavourites] = useState([]);
    const[currPage , setCurrPage] = useState(1);


    useEffect(()=>{
      let oldfav = localStorage.getItem("imdb");
            oldfav = JSON.parse(oldfav)
            setFavourites([...oldfav])
    },[])

    
    const people = [
        {
          name: 'Jane Cooper',
          title: 'Regional Paradigm Technician',
          department: 'Optimization',
          role: 'Admin',
          email: 'jane.cooper@example.com',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
          {
            name: 'Jane Cooper',
            title: 'Regional Paradigm Technician',
            department: 'Optimization',
            role: 'Admin',
            email: 'jane.cooper@example.com',
            image:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          },
        
      ]
      /* filtering movies */ 

      /*let filteredMovies = []

      filteredMovies = currentGenre == "All Genres"  ? Favourites:
      Favourites.filter((movie) == genreid.[movie.genre_id[0]] == currentGenre)*/

      /*sorting */ 

      const [rating , setRating] = useState(0)
      const [Popularity , setPopularity] = useState(0)
      /*search for arrows*/
      /*then apply onclick on td == setRating( -1) lower arrow
      then apply onclick on td == setRating( +1) upper arrow*/
      /*if(rating == 1)
      {
        filteredMovies = filteredMovies.sort(function(obja , objb){
          return objb.vote_average - obja.vote_average
        })

      }else if(rating == -1)
      {
        filteredMovies = filteredMovies.sort(function(obja , objb){
          return objb.vote_average - obja.vote_average

      }*/

      //Pagination
      

    return(
        <>
        <div className="mt-4 px-2 flex justify-center flex-wrap space-x-2">
            <button className={
                currentGenre == "All Genres" ? 
                "m-2 text-lg p-2 bg-blue-600 text-white rounded-xl font-bold" 
                :"m-2 text-lg p-2 bg-gray-600 hover:bg-blue-600 text-white rounded-xl font-bold" }>
                All Genres
            </button>
            <button className={
                currentGenre == "Action" ? 
                "m-2 text-lg p-2 bg-blue-600 text-white rounded-xl font-bold" 
                :"m-2 text-lg p-2 bg-gray-600 hover:bg-blue-600 text-white rounded-xl font-bold" }>
                Action
            </button>
          
            
        </div>

        <div className="text-center">
            <input type="text" placeholder = "Search" className="border border-4 text-center p-1 m-2"></input>
            <input type="number" placeholder = "Rows" className="border border-4 text-center p-1 m-2"></input>
        </div>
        
        {/*Table Container*/}

        
       
 


<div>
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Popularity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    
                  >
                    Remove
                  </th>
                  
                  
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )


        





        <div className="mt-4">
        <Pagination />
        </div>

        
        
        
        </>
    )
}
export default Favourite