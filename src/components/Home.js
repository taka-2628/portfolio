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
    <div>
      <h1>Home</h1>
      <SelectedWork />
    </div>
  )
}

export default Home;