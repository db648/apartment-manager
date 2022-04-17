import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth_redux/action";

export const NavbarProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function Logout() {
        dispatch(logout(null))
        navigate("/login")
    }

    return (
        <div className="navbar">
            <div className="left d-flex justify-content-around p-1">
                <button type="button" className="btn btn-info" onClick={() => {
                    navigate("/")
                }}>
                    Home
                </button>
                <img className="apartment" src="https://qph.cf2.quoracdn.net/main-qimg-35087cc2dfd9af491fc8640398d53aa7-lq" alt="apartment"/>
                <h1 className="center">Apartments</h1>

               
            </div>
            
            <div className="d-flex bd-highlight">   
                      
                {/* <div className="p-2 flex-fill bd-highlight">
                    <button type="button" className="btn btn-info" onClick={() => {
                        navigate("/flat")
                    }}>Add Flat</button>
                </div>

                <div className="p-2 flex-fill bd-highlight">
                    <button type="button" className="btn btn-info" onClick={() => {
                        navigate("/resident")
                    }}>Add Resident</button>
                </div> */}

                <div className="p-2 flex-fill bd-highlight">
                    <button type="button" className="btn btn-info" onClick={() => { Logout()
                    }}>Logout</button>
                </div>

                
            </div>
        </div>
    )
}