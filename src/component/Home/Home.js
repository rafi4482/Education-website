import "./Home.css"
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Home = () => {

  const[card,setCard]=useState([]);

useEffect(()=>{
fetch('./serviceprovide.JSON')
.then(res=>res.json())
.then(data=>setCard(data))
},[])


    return (
      <div>

        <div className="cont">
          <h1>WELCOME TO RAFI EDUCATION</h1>  
          <p>we provide the best quality services</p>        
        </div>

        <h1 className="head">OUR COURSE AND SERVICE</h1>
        <div className="card-create">
          <div className="row">
            {
              card.map(c=><div className="col-md-3">
                <div className="card-create1">

                  <div className="image">
                    <img className="w-50 mx-5" src={c.img} alt="" />
                  </div>
                  <div>
                    <h3 className="margin">Course Name: <span>{c.name}</span> </h3>
                    <h4>Course Fee: <span>{c.price}</span> </h4>
                    <p> <span>{c.desc}</span> </p>
                  </div>
                </div>
                </div>
                )

            }

          </div>


        </div>
        
        <Footer></Footer>
      </div>
        
    );
};

export default Home;<h1>this is home compo</h1>