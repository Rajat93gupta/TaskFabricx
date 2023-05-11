import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const FirstPage = () => {

  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  console.log(img);
  const naviagte = useNavigate();
  useEffect(() => {
    HandleSearch();
  }, []);
  const HandleSearch = async () => {

    
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      console.log("clicked");
      console.log(response.data.results);
      setRes(response.data.results);
    } catch (error) {
      console.log(error);
      // }
    }
  };
  console.log(res);
  const HandleAddCaption = (value) => {
    // alert("hi");
    naviagte("/secondPage", { state: { value: value } });
    console.log(value.id);
  };
  return (
    <>
      <h1 className="textcenter">Randome Image Generator</h1>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <p>Name:Rajat Kuamr</p>
              <p>Email:rajatkumr3991@gmail.com</p>
            </div>

          </div>
          <hr />

        </div>
        <div className="row">
          <div className="col-12">
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

        </div>
        <hr/>
        


         

          <div className="row">
            {res?.map((value, index) => {
              return (
                <div key={index}>
                  
                    <div className="col-3">
                      <div className="innerItem">
                      <img src={value.urls.thumb} alt="unsplash" />
                    
                    <button className="button" onClick={() => HandleAddCaption(value)}>
                      {" "}
                      Add Caption
                    </button>
                        </div>
                     
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
     
    </>
  );
};
export default FirstPage;
