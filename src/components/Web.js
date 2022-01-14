import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

function Web(){
  const match = useRouteMatch();
  console.log(match);

  const { setBackground } = useContext(BackgroundContext);

  useEffect(()=> {
    setBackground("black")
  }, [])

  return (
    <div>
      <h1>Web</h1>
    </div>
  )
}

export default Web;