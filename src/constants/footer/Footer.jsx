import "./footer.css";

import React from 'react'

function Footer() {
    return (
        <div className="footer-container"> 
        <hr></hr> 
        <div className="footer">
           

           <div className="footer-box">
               <h3>Contact details</h3>
               <ul> 
                   <li><a href = "mailto: sabine.randow@gmail.com"> <i class="bi bi-envelope-fill"></i> Send me an Email!</a> </li>
                   <li> sabine.randow@gmail.com</li>

               </ul>
           </div>
           <div className="footer-box">
               <h3>Links</h3>
               <ul>
                    <li> <a href="https://www.linkedin.com/in/sabine-r-4a9217116/" target="_blank"><i class="bi bi-linkedin"></i> I'm on LinkedIn!</a> </li>
                    <li> <a href="https://github.com/BaBineBo" target="_blank"><i class="bi bi-github"></i> I'm on GitHub!</a></li>
               </ul>   
           </div>


        </div>
        <hr></hr></div>
    )
}

export default Footer
