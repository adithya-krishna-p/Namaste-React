import React from 'react'
import ResCard from './ResCard'
import './Body.css'


const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='resto-container'>
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />


      </div>
    </div>
  )
}

export default Body