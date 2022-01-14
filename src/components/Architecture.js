import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

function Architecture(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("border-black")
  }, [])

  return (
    <div>
      <h1>Architecture</h1>
    </div>
  )
}

export default Architecture;