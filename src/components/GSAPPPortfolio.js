import React  from "react";
import { useRouteMatch } from "react-router-dom";

function GSAPPPortfolio(){
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h1>Under Construction</h1>
    </div>
  )
}

export default GSAPPPortfolio;