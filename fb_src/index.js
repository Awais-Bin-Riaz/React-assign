import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import ava1 from "./image/ava1.png"
import ava2 from "./image/ava2.png"
import ava3 from "./image/ava3.png"
import avatar from "./image/whatisavatar.jpg"

function Hi(props) {
  return <div id="main">

  <p>
    <img className="prof" src={props.prof} />
    <strong>{props.name}!</strong>  

    <br />
    {props.date}
    </p>
    <p>In computing, an avatar is a graphical representation of a user or the user's character or persona. It may take either a two-dimensional form as an icon</p>
    <img className="img" src={props.img} />
  </div>;
}
ReactDOM.render(
  <div>
    <Hi prof={ava1} name="Girl1 Avator" date="12/10/2021" img={avatar}/>
    <Hi prof={ava2} name="Girl2 Avator" date="1/10/2021" img={avatar} />
    <Hi prof={ava3} name="Boy Avator" date="2/10/2021" img={avatar} />
  </div>,
  document.querySelector('#root'));