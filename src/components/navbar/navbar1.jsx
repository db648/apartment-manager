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
        <div class="d-flex bd-highlight">
            <div class="p-2 flex-fill bd-highlight">
                <button type="button" class="btn btn-info" onClick={() => {
                    navigate("/")
                }}>Home</button>
            </div>
            <div class="d-flex bd-highlight">              
                <div class="p-2 flex-fill bd-highlight">
                    <button type="button" class="btn btn-info" onClick={() => {
                        navigate("/flat")
                    }}>Add Flat</button>
                </div>

                <div class="p-2 flex-fill bd-highlight">
                    <button type="button" class="btn btn-info" onClick={() => {
                        navigate("/resident")
                    }}>Add Resident</button>
                </div>

                <div class="p-2 flex-fill bd-highlight">
                    <button type="button" class="btn btn-info" onClick={() => { Logout()
                    }}>Logout</button>
                </div>

                
            </div>
        </div>
    )
}