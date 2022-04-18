import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../redux/action";
import { NavbarProduct } from "./navbar/navbar1";

export const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [term, setTerm] = useState(null);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);
  const CityData = useSelector((state) => state.apartmentReducer.flats);
  const [resData, setResData] = useState(CityData);
  useEffect(() => {
    axios
      .get("https://flatsunit6.herokuapp.com/flat", {
        headers: {
          token:
            "Bearer " +
            JSON.parse(localStorage.getItem("login_status")).accessToken,
        },
      })
      .then((res) => {
        console.log("fetching success", res.data);
        dispatch(getData(res.data));
        setResData(res.data);
      });
  }, []);

  let data =  useSelector((state) => state.apartmentReducer.flats);
  function sortPopulation() {
    data = CityData.sort((a, b) => a.number - b.number);
    console.log(data);
    setResData([...data]);
  }

  let data1 =  useSelector((state) => state.apartmentReducer.flats);
  function sortPopulation1() {
    data1 = CityData.sort((a, b) => b.number - a.number);
    console.log(data);
    setResData([...data]);
  }

  function eachFlat(i) {
    navigate(`/flat/${i}`);
  }

  function debounce(cb, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  let updateDebouce = debounce(searchTerm, 1000);

  function searchTerm(val) {
    if(val.length > 0) {
        axios
      .get(`https://flatsunit6.herokuapp.com/flat/search?s=${val}`, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("login_status")).accessToken,
        },
      })
      .then((res) => {
        setTerm(res.data.result);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <NavbarProduct />

      <div className="lging">
        <div className="flex marginl">
            <div>
              <button
                className="btn btn-outline-warning m-2 p-2 "
                onClick={() => {
                  sortPopulation();
                }}
              >
                Sort By Flat Number Asc Order
              </button>
            </div>
            <div>
              <button
                className="btn btn-outline-warning m-2 p-2 "
                onClick={() => {
                  sortPopulation1();
                }}
              >
                Sort By Flat Number Desc Order
              </button>
            </div>
          <div>
            <select
              name="country_filter"
              className="btn btn-outline-warning m-2 p-2"
              id="country_filter"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <option value="">Filter By Resident Type ........</option>
              <option value="owner">Owner</option>
              <option value="tenant">Tenant</option>
            </select>
          </div>

          
          <div className="position-relative">
          <input
            type="search"
            className="btn btn-outline-warning input-group-text p-2 m-2"
            placeholder="Search Block Name"
            onChange={(e) => {
              updateDebouce(e.target.value);
            }}
          />
          <div>
            {term ? (
              <>
                {term.map((ele) => (
                  <>
                    <div
                      key={ele._id}
                      className="p-3 mb-2 bg-light text-dark position-absolute border bg-light"
                      onClick={() => {
                        setTerm(null);
                        navigate(`/flat/${ele._id}`);
                      }}
                    >
                      <p>
                        {" "}
                        <b>Type-</b> {ele.type}
                      </p>
                      <p>
                        {" "}
                        <b>Number- </b> {ele.number}
                      </p>
                      <p>
                        {" "}
                        <b>Block- </b> {ele.block}
                      </p>
                      <p>click for more deatials</p>
                    </div>
                  </>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
          </div>
        </div>
        <br/>

        <table className="table w-75 m-auto textclr">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Resident Type</th>
              <th scope="col">Block Name</th>
              <th scope="col">Flat Number </th>
              <th scope="col">Residents</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {resData
              .filter((ele) => ele.type.includes(filter))
              .map((ele, i) => (
                <>
                  <tr
                    key={ele.id}
                    onClick={() => {
                      eachFlat(ele._id);
                    }}
                  >
                    <th scope="row">{+(i + 1)}</th>
                    <td>{ele.type}</td>
                    <td>{ele.block}</td>
                    <td>{ele.number}</td>
                    <td>
                      {ele.residents.map((ele) => (
                        <>
                          <td>{ele.name}</td>
                        </>
                      ))}
                    </td>
                    <td>Click</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
