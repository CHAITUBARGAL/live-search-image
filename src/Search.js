import React, { useState } from "react";
import Sresult from "./Sresult";

const Search= () => {
  const [img, setimg] = useState('');
  const inputEvent = (event)=>{
   const data= event.target.value;
   console.log(data);
   setimg(data);
  }
    return (
        <>
            <div> <br/>
                <input type="text"placeholder="Search anything to get image" value={img} onChange={inputEvent}/>
            </div>
           {img === "" ? null : <Sresult name={img} />}
        </>
    )
}
export default Search