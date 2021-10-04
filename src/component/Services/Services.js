import React, { useEffect, useState } from 'react';
import "./Services.css"
import { Card, Col, Row } from "react-bootstrap";
import Footer from '../Footer/Footer';

const Services = () => {


    const[serv,setServ]=useState([]);

useEffect(()=>{
fetch('./fakedata44.JSON')
.then(res=>res.json())
.then(data=>setServ(data))
},[])





    return (
        <div className="services">
            <h2>LEARN MORE ABOUT OUR EXTRA CRASH COURSES</h2>

            <div className="card-create">
            <div className="row">
            {
              serv.map(s=><div className="col-md-4">
                <div className="card-create12">

                  <div className="image">
                    <img className="w-50 mx-5" src={s.img} alt="" />
                  </div>
                  <div>
                    <h3>Course Name: <span>{s.name}</span> </h3>
                    <h4>Course Fee: <span>{s.price}</span> </h4>
                    <p> <span>{s.desc}</span> </p>
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

export default Services;<h1>Services</h1>