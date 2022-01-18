import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

//import { web } from "../data/data.js"
//import bundle from "../assets/01-BUNDLE.gif"

const web = [
  {
    id: 1,
    title: "BUNDLE",
    image: "../assets/01-BUNDLE.gif",
    description: "",
    url: "",
    github: "https://github.com/taka-2628/BUNDLE",
    selected: true
  },
  {
    id: 2,
    title: "LIFE AND DEATH OF 52,711 ACTORS",
    image: "../assets/02-52711-Actors.gif",
    description: "",
    url: "",
    github: "https://github.com/taka-2628/52711_ACTORS",
    selected: false
  }
]

function Web(){
  const match = useRouteMatch();
  console.log(match);
  console.log(web);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("black")
  }, [])

  const a = web.map((project) => {
    console.log(project)
    return (
      <div key={project.title}>
         <img src={project.image} alt={project.title}></img>
         <h2>{project.title}</h2>
      </div>
    )
  })
  return (
    <div id="web">
      <h1>Web</h1>
      {a}
    </div>
  )
}

export default Web;