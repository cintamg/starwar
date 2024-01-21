import React, { useEffect, useState } from 'react'
import ListItems from './ListItems';

export default function People() {

    const [people,setPeople] = useState([]);

    const imageUrls =[
        "PeopleImg/img1.png",
        "PeopleImg/img2.png",
        "PeopleImg/img3.png",
        "PeopleImg/img4.png",
        "PeopleImg/img5.png",
        "PeopleImg/img6.png",
        "PeopleImg/img7.png",
        "PeopleImg/img8.png",
        "PeopleImg/img8.png",
        "PeopleImg/img10.png",
    ];

    useEffect( () => {
        const fetchData = async () => {
            const url = "https://swapi.dev/api/people/";
            const response = await fetch(url);
            const data = await response.json();
            setPeople(data.results);
        }
        fetchData();
    },[])

  return (
    <>
    <div className="row">
        {people.map((element,index) => {
                return(
                    <div className="col-md-4 my-3" key={index}>
                        <ListItems name={element.name} birth_year={element.birth_year} gender={element.gender} image={imageUrls[index]} url={element.homeworld}/>
                    </div>
                );
            })}
    </div>
    </>
  )
}
