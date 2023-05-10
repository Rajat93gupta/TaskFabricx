import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const FirstPage = ({ value }) => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  console.log(img);
  const naviagte = useNavigate();
  useEffect(() => {
    HandleSearch();
  }, []);
  const HandleSearch = async () => {
    // if (img === "") {
    //   alert("please write something");
    //   // searchRef.current.focus();
    // } else {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=HUBRWInlxtMY5DAdLMX829e1lsrdEFJVFZLv6Uwl8pw`
      );
      console.log(response.data.results);
      setRes(response.data.results);
    } catch (error) {
      console.log(error);
      // }
    }
  };
  const HandleAddCaption = (value) => {
    // alert("hi");
    naviagte("/secondPage", { state: { value: value } });
    console.log(value.id);
  };
  return (
    <>
      <h1>Search Page</h1>
      <div className="container">
        <div className="Upper">
          <div className="header">
            <p>Name:Rajat Kuamr</p>
            <p>Email:rajatkumr3991@gmail.com</p>
          </div>
          <hr />
          <div className="ItemPage">
            <div className="input">
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Enter Your Search Term"
              />
              <button onClick={HandleSearch}>Search</button>
            </div>
          </div>

          <div className="Result">
            {res?.map((value, index) => {
              return (
                <div key={index}>
                  <div className="main">
                    <div className="Image">
                      <img src={value.urls.thumb} alt="unsplash" />
                      {/* <Link to="/secondpage"> */}
                      <button onClick={() => HandleAddCaption(value)}>
                        {" "}
                        Add Caption
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
