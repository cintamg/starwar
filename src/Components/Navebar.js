import React from 'react';
import {Link} from 'react-router-dom'

export default function Navebar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><b>Today's News</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">All articles</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/techcrunch">Tech Crunch</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/newsus">News US</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/newstesla">News Tesla</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/newsapple">News Apple</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
