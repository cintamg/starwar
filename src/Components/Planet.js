import React, { useEffect, useState } from 'react'
import ListItems from './ListItems';

export default function Planet() {

    const [planet,setPlanet] = useState([]);

    const imageUrls =[
        "PlanetImg/img1.png",
        "PlanetImg/img2.png",
        "PlanetImg/img3.png",
        "PlanetImg/img4.png",
        "PlanetImg/img5.png",
        "PlanetImg/img6.png",
        "PlanetImg/img7.png",
        "PlanetImg/img8.png",
        "PlanetImg/img9.png",
        "PlanetImg/img10.png",
    ];

    useEffect( () => {
        const fetchData = async () => {
            const url = "https://swapi.dev/api/people/";
            const response = await fetch(url);
            const data = await response.json();
            setPlanet(data.results);
        }
        fetchData();
    },[])

  return (
    <div className='container'>
        <h1 className="text text-center">CHARACTERS</h1>
    <div className="row">
        {planet.map((element,index) => {
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