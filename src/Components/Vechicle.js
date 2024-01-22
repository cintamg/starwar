import React, { useEffect, useState } from 'react'
import ListItems from './ListItems';
import { Link } from 'react-router-dom';

export default function Vehicle() {

    const [vehicle,setVehicle] = useState([]);

    const imageUrls =[
        "VehicleImg/img1.png",
        "VehicleImg/img2.png",
        "VehicleImg/img3.png",
        "VehicleImg/img4.png",
        "VehicleImg/img5.png",
        "VehicleImg/img6.png",
        "VehicleImg/img7.png",
        "VehicleImg/img8.png",
        "VehicleImg/img9.png",
        "VehicleImg/img10.png",
    ];

    useEffect( () => {
        const fetchData = async () => {
            const url = "https://swapi.dev/api/vehicles/";
            const response = await fetch(url);
            const data = await response.json();
            setVehicle(data.results);
        }
        fetchData();
    },[])

  return (
    <div className='container'>
        <Link to="/"><button className='btn btn-dark'>Back Home</button></Link>
        <h1 className="text text-center">VEHICLES</h1>
        <div className="row">
            {vehicle.map((element,index) => {
                    return(
                        <div className="col-md-4 my-3" key={index}>
                            <ListItems name={element.name} image={imageUrls[index]} url={element.url}/>
                        </div>
                    );
                })}
        </div>
    </div>
  )
}