import React, { useState } from "react";

const BackgroundContext = React.createContext;

function BackgroundProvider({ children }){
  const [background, setBackground] = useState("border-black");

  return (
    <BackgroundContext.Povider value={{ background, setBackground}}>
      {children}
    </BackgroundContext.Povider>
  )
}

export { BackgroundContext, BackgroundProvider }