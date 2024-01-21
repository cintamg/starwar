import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <dl className='my-3'>
        <dt><a href="/people">People</a></dt><br/>
        <dt><a href="/spaceship">Spaceships</a></dt><br/>
        {/* <dt><a href="/vechicle">Vehicles</a></dt><br/>
        <dt><a href="/planets">Planets</a></dt><br/>
        <dt><a href="/film">Films</a></dt><br/>
        <dt><a href="/species">Species</a></dt><br/> */}
      </dl>
    </div>
  )
}