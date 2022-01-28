import React from "react";
import { useParams } from "react-router-dom";

function SDTProject({ data }){
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default SDTProject;