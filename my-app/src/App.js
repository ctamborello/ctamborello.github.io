import './App.css';
import React, { useState, useRef } from 'react';
import Active from "./earth.jpg";
import Inactive from "./blank.jpg";
import ToggleImages from "./ToggleImages.js";

class Planet {
  constructor(name, diameter, galaxy, life) {
    this.name = name;
    this.diameter = diameter;
    this.galaxy = galaxy;
    this.life = life;
  }

  identify() {
    return "I am the planet " + this.name;
  }

  changePlanet(value, diameter, galaxy, life) {
    this.name = value;
    this.diameter = diameter;
    this.galaxy = galaxy;
    this.life = life;
  }
  render() {
    return <p>Hi, I'm a planet!</p>;
  }
}

function App() {
  const planet = new Planet("Earth", 100000, "Milky Way", "Yes");

  const someInput = useRef();
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  function toggleStats() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function planetChange() {
    toggleStats();
    planet.changePlanet("Mars", 50000, "Milky Way", "No");
  }

  function addData() {
    var text = someInput.current.value;
    console.log(text);
  }

  return (  
    <>
    <h1>Hello Universe, { planet.identify() } !</h1>
    
    <p id='demo' data-testid="class1"> Planet Name: { planet.name }<br /> 
    Planet Diameter: { planet.diameter }
    <br /> Residing Galaxy: { planet.galaxy }
    <br /> Does It Contain Life: { planet.life }</p>
    <button onClick={toggleStats}>Toggle Statistics</button>
    <ToggleImages active={active} handleChangeActive={handleChangeActive} data-testid="imageToggle"/>

    <br></br>

    <button onClick={planetChange}>Change Planet To Mars</button>
    <br /><br />

    <input ref={someInput} id='input1' type="text"></input>
    <button onClick={addData}>Add Data</button>

    </>
  );
}

export default App;
