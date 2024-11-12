import React, { useState } from 'react'
import './Body.css'
import {LOGO_URL} from '../Utils/Constants'
import resList from '../Utils/MockData'

const ResCard = (props) => {

  // Local State variable = super powerful variable

  const [ListofRestaurants, setListofRestaurant] = useState([]);
 

  // normal JS variable
  // let ListofRestaurants = [
  //   {
  //    data: {
  //      id: "1",
  //      name: "Dominos",
  //      avgRating: "3.8"
  //    }
  //   },
 
  //   {
  //    data: {
  //      id: "2",
  //      name: "kfc",
  //      avgRating: "4.8"
  //    }
  //   }
 
  //  ];
   
  return (
    <> 
    <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
    <img className='img' src={LOGO_URL}></img>
    <h3>
        
    </h3>
    <h4>
        Biriyani, North Indian, Asian
    </h4>
    <h4>
        4.4 Stars
    </h4>
    <h4>
      34 minutes
    </h4>
</div>

</>
  )
}

export default ResCard