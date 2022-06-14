import Clock from "./clock";
import "./NavBar.css"
// import React, {useState} from "react";
// import FaceitLogo from "./faceitlogo"
const NavBar = () => {
    return (
       <div className="NavBar"> 
                {/* <div className="clock">
                    
                </div> */}
        <div className="container">
            <div className="clock">
                <Clock></Clock>
            </div>  
        <a href="https://www.faceit.com/ru/players/-Nishinoya" target="_blank" rel="noopener noreferrer">
         <img class="logo" src="https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2-268x151.png" alt="faceitlogo"/> 
         </a>
        </div>
       </div>
    )
}
export default NavBar;
