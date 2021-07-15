import { guitars } from './guitars';
import React from 'react';
import ReactDOM from 'react-dom';

let images = []
const showBackground = true

function displayFact(e) {
  let facts = guitars[e.target.alt].facts
  document.getElementById('fact').innerHTML = facts[Math.floor(Math.random() * facts.length)]
}

for (const guitar in guitars) {
  images.push(
    <img
    key={guitar}
    className='guitar'
    alt={guitar}
    src={guitars[guitar].image}
    ariaLabel={guitar}
    role='button'
    onClick={displayFact}
    />
    )
}

const background = <img alt="coolwall" src="/images/coolwall1.jpg" />

const guitarFacts = (
  <div>
    <h1 className='wall' style={{"position": "absolute", color:"white", fontSize: "3em", fontFamily: "fantasy"}}>CLICK YOUR FAVORITE GUITAR FOR A FUN FACT FOUND BY: ANDRES R. BUCHELI</h1>
    {showBackground && background}
    <p id='fact' style={{color:"#feb236", fontSize: "2em", fontFamily: "fantasy", marginTop: "6em"}}></p>
    <div className="guitars">
      {images}
    </div>
  </div>
)
ReactDOM.render(guitarFacts, document.getElementById("root"));
