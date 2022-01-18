import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

function SpaceDesignTech(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("border-black")
  }, [])

  return (
    <div>
      <h1>Space | Design | Tech</h1>
    </div>
  )
}

export default SpaceDesignTech;