import React, { useState } from 'react'

const Input_url = ({ setInputValue}) => {
  const [value,setValue] = useState("");

  const handleClick = () =>{
    setInputValue(value);
    setValue("");
  }


  return (
    <div className="inputcontainer">
        <h1>URL <span>Shortner</span></h1>
        <div>
            <input type="text" 
            placeholder="Place link here to shorten" 
            value={value}
            onChange={e => setValue(e.target.value)}
            /> 
            <button onClick={handleClick}> shorten </button>
        </div>
    </div>
  )
}

export default Input_url