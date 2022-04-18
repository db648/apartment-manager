import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
                <button type="button" className="btn btn-info" onClick={() => {
                    navigate("/")
                }}>Home</button>
                <img className="apartment" src="https://qph.cf2.quoracdn.net/main-qimg-35087cc2dfd9af491fc8640398d53aa7-lq" alt="apartment"/>
                <h1 className="center">Apartment-System</h1>
            </div>
            <div className="d-flex bd-highlight">              
                <div className="p-2 flex-fill bd-highlight">
                    <button type="button" className="btn btn-info" onClick={() => {
                        navigate("/login")
                    }}>Sign-In</button>
                </div>

                <div className="p-2 flex-fill bd-highlight">
                    <button type="button" className="btn btn-info" onClick={() => {
                        navigate("/register")
                    }}>Sign-Up</button>
                </div>
                
            </div>
        </div>
    )
}