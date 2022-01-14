import React, { useContext, useEffect }  from "react";
import { useRouteMatch } from "react-router-dom";
import { BackgroundContext } from './context/background';

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
    </div>
  )
}

export default Photography;