import React, { useEffect, useState } from 'react';
import ProfilePicture from "../pictures/dogProfile.jpg";
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);
   
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <>
            <div className={`nav ${show && "nav_black"}`}>
                 <h1 className="xilften">XiLFTeN</h1>

                 <img
                 className="avatar"
                 src={ProfilePicture}
                 alt="Dog Avatar"
                 />
            </div>
        </>
    )
}

export default Navbar;