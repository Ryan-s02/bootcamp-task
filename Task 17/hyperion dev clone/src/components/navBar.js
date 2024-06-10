// import React from 'react';
import './navBar.css';
import image1 from './logo.svg';
import Hamburger from './hamburger';

//navbar that has the hamburger component to the right of the page
function NavBar(){
    return(
        <div id='navBar'>

            <div className=" container">
                <div className="left">
                    <img id="image-logo" src={image1} alt="Hyperion Dev Logo"/>
                </div>
                <div className='right'>
                    <button id="dashboard-button" >Dashboard</button>
                </div>
                <div className='right'>
                    {/* using the hamburger component that we imported from hamburger.js */}
                    <Hamburger/>
                </div>
            </div>
         </div>

    );
}

export default NavBar;