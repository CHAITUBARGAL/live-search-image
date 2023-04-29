import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import Search from "./Search";
import NavBar from "./NavBar";

const App = () => {
  return(
    <>
    <NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/search" element={<Search/>}/>

</Routes>
    </>
  )
}
export default App;