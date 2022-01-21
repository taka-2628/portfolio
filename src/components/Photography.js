import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

import noline from "../assets/space-design-tech/c-II-01.png";

function Photography(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("gray")
  }, [])

  return (
    <div>
      <h1>Photography</h1>
      <img src={noline} width="100%"></img>
    </div>
  )
}

export default Photography;