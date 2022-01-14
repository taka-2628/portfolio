import React, { useState } from "react";

const BackgroundContext = React.createContext();

function BackgroundProvider({ children }){
  const [background, setBackground] = useState("border-black");

  return (
    <BackgroundContext.Provider value={{ background, setBackground}}>
      {children}
    </BackgroundContext.Provider>
  )
}

export { BackgroundContext, BackgroundProvider }