import React from "react";

const Sresult = (props) => {
    const img  = `https://source.unsplash.com/featured/300x201/?${props.name}`;
    return(
        <>
            <div>
                <img src={img} alt="seaarch images"/>
            </div>
        </>
    )
}
export default Sresult