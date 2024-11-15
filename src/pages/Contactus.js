import React from 'react'

const Contactus = () => {
  return (
    <div className='Contactus'>
    <div className='form'>
      <form>
        <label>Name</label>
        <input type='text'></input>
        <br/>
        <label>Email</label>
        <input type='email'></input>
        <br />
        <label>Phone Number</label>
        <input type='number'></input>
        <br></br>
        <label>Description</label>
        <input type='text' height={"200px"} width={"200px"}></input>
        <br/>
        <button type='submit'>Connect With us</button>
      </form>

    </div>
    </div>
  )
}

export default Contactus