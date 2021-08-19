import React from 'react';
import ProfilePicture from "../pictures/dogProfile.jpg";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="nav">
                 <h1 className="xilften">XiLFTeN</h1>

                 <img
                 className="avatar"
                 src={ProfilePicture}
                 />
            </div>
        </>
    )
}

export default Navbar;