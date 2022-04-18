import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavbarProduct } from "./navbar/navbar1";

export const FlatDetails = () => {
  let { id } = useParams();

  let arr = useSelector((state) => state.apartmentReducer.flats);
  console.log("arr", arr);
  const [single, setSingle] = useState({});
  let single2 = arr.filter((ele) => ele._id === id);
  console.log("2222", single2);

  return (
    <div className="singleflatimg">
      <NavbarProduct />
      <div className="bg-light w-75 border m-auto textclr">
        <h1>Flat details</h1>
        {single2.map((ele) => (
          <>
            <ul>
              <li>Type {ele.type}</li>
              <li>Block {ele.block}</li>
              <li>Number {ele.number}</li>
              <ul>
                {ele.residents.map((ele) => (
                  <>
                    <li>Name {ele.name}</li>
                    <li>Age {ele.age}</li>
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
