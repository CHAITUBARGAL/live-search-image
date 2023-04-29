import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>

            <Link to='/'>Home</Link>  <br />
            <Link to='/contact'>Contach us</Link> <br />
            <Link to='/search'>Search us</Link><br />

        </>
    )
}
export default NavBar