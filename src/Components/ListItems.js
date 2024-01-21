import React from 'react'

export default function ListItems(props) {
  return (
    <div className="card">
        <img src={props.image} className="card-img-top" alt={`${props.name}`}/>
        {console.log(props.imageUrl)}
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"></p>
            <a href={props.url} className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}
