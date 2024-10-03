import React from 'react'
import ResCard from './ResCard'
import './Body.css'


const Body = () => {

let ListofRestaurants = [
   {
    data: {
      id: "1",
      name: "Dominos",
      avgRating: "3.8"
    }
   },

   {
    data: {
      id: "2",
      name: "kfc",
      avgRating: "4.8"
    }
   }

  ];
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='filter'>
      <button className='filter-btn' onClick={() => {
        // filter logic here
        ListofRestaurants = ListofRestaurants.filter(res => res.data.avgRating > 4 );
        console.log(ListofRestaurants);
      }} >

        Top-Rated-Restaurant
      </button>
      </div>
      <div className='resto-container'>
    
        {
          ListofRestaurants.map((res)=> (
            <ResCard key={res.data.id}  />
          ))
        }


      </div>
    </div>
  )
}

export default Body