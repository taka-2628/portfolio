import React, { useState } from "react";

const BackgroundContext = React.createContext();

function BackgroundProvider({ children }){
  const [background, setBackground] = useState("white");

  return (
    <BackgroundContext.Provider value={{ background, setBackground}}>
      {children}
    </BackgroundContext.Provider>
  )
}

export { BackgroundContext, BackgroundProvider }