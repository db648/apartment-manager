import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavbarProduct } from "./navbar/navbar1";

export const FlatDetails = () => {
  let { id } = useParams();

  let arr = useSelector((state) => state.apartmentReducer.flats);
  console.log("arr", arr);
  let single2 = arr.filter((ele) => ele._id === id);
  console.log("2222", single2);

  return (
    <div className="singleflatimg">
      <NavbarProduct />
      
      <div className="bg-light w-50 border m-auto textclr">
        <br />
        {single2.map((ele) => (
          <>
          <h1>Flat Number {ele.number} Details</h1>
          <br />
            <ul>
              <li>Resident Type : {ele.type}</li>
              <br />
              <li>Block Name : {ele.block}</li>
              
              <ul>
                <br />
                {ele.residents.map((ele) => (
                  <>
                    <li>Name of the Resident : {ele.name}</li>
                    <br />
                    <li>Gender of the Resident : {ele.gender}</li>
                    <br />
                    <li>Age of the Resident : {ele.age}</li>
                    <br />
                  </>
                ))}
              </ul>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
