import React, { useEffect, useState } from 'react'
import SpaceItems from './SpaceItems';
import { Link } from 'react-router-dom';

export default function Spaceship() {

    const [spaceShip,setSpaceShip] = useState([]);

    const imageUrls =[
        "SpaceShipImg/img1.png",
        "SpaceShipImg/img2.png",
        "SpaceShipImg/img3.webp",
        "SpaceShipImg/img4.webp",
        "SpaceShipImg/img5.png",
        "SpaceShipImg/img6.png",
        "SpaceShipImg/img7.png",
        "SpaceShipImg/img8.png",
        "SpaceShipImg/img9.png",
        "SpaceShipImg/img10.png",
    ];

    useEffect( () => {
        const fetchData = async () => {
            const url = "https://swapi.dev/api/starships/";
            const response = await fetch(url);
            const data = await response.json();
            setSpaceShip(data.results);
        }
        fetchData();
    },[])

  return (
    <div className='container'>
        <Link to="/"><button className='btn btn-dark'>Back Home</button></Link>
        <h1 className="text text-center">SPACE SHIPS</h1>
        <div className="row">
            {spaceShip.map((element,index) => {
                    return(
                        <div className="col-md-4 my-3" key={index}>
                            <SpaceItems name={element.name} pilots={element.pilots} image={imageUrls[index]} model={element.model} url={element.url}/>
                        </div>
                    );
                })}
        </div>
    </div>
  )
}