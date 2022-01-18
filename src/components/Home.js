import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import SelectedWork from "./SelectedWorks";
import { BackgroundContext } from './context/background';

function Home(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("border-black")
  }, [])

  return (
    <div id="home">
      <h1>Takashi</h1>
      <p>is a creative developer</p>
      <SelectedWork />
    </div>
  )
}

export default Home;