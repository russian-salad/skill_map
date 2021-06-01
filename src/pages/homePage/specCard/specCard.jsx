import { Link } from "react-router-dom";
import React from 'react'
import s from 'pages/homePage/homepage.module.css'
export default function SpecCard(props) {
    const { name, username } = props.data;
    return (
      <Link to={{ pathname: "#" }}>
        <div className={s.card}>
          {/* <div className="content"> */}
          {/* <div className="card-img">
                            <img src={emblemUrl alt={name} />
                          </div> */}
          <div className="card-info">
            <h3>{name}</h3>
            <p>{username}</p>
          </div>
          {/* </div> */}
        </div>
      </Link>
    );
  }