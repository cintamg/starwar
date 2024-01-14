import React from 'react'

export default function NewsItems(props) {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
      <img src={props.imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.newsUrl} target='_blank' className="btn btn-primary">Read more</a>
      </div>
    </div>
    </>
  )
}
