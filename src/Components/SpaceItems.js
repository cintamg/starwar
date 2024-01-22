import React from 'react'

export default function ListItems(props) {

  return (
    <div className="card-new">
        <img src={props.image} className="card-img-top" alt={`${props.name}`}/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{`Model : ${props.model}`}</p>
            <p className="card-extra">
              {(props.pilots.length === 0) ? (
                <p>No pilots.</p>
              ) : (
                <ul>
                  {props.pilots.map((pilot, index) => (
                    <li key={index}><a href={pilot}>{`Pilot${index+1}`}</a></li>
                  ))}
                </ul>
              )}
            </p>
            <a href={props.url} className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}