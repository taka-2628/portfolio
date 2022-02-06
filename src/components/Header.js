import React, { useContext } from "react";
import NavBar from "./NavBar";
import { BackgroundContext } from './context/background';

function Header(){
  const { background } = useContext(BackgroundContext);

  const style = background !== "black" ? "logo-black" : "logo-white";
  
  return (
    <header>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.76 72">
        <line className={`st0 ${style}`} x1="0" y1="14.36" x2="35" y2="14.36"/>
        <line className={`st0 ${style}`} x1="17.53" y1="21.66" x2="35" y2="21.66"/>
        <line className={`st0 ${style}`} x1="34.5" y1="21.66" x2="34.5" y2="13.9"/>
        <line className={`st0 ${style}`} x1="18.01" y1="58.11" x2="18.01" y2="21.16"/>
        <line className={`st0 ${style}`} x1="41.91" y1="36.58" x2="41.91" y2="21.16"/>
        <line className={`st0 ${style}`} x1="49.26" y1="58.12" x2="49.26" y2="21.16"/>
        <line className={`st0 ${style}`} x1="17.53" y1="57.62" x2="25.76" y2="57.62"/>
        <line className={`st0 ${style}`} x1="25.26" y1="58.09" x2="25.26" y2="42.57"/>
        <line className={`st0 ${style}`} x1="24.76" y1="42.57" x2="42.41" y2="42.57"/>
        <line className={`st0 ${style}`} x1="41.91" y1="58.11" x2="41.91" y2="42.57"/>
        <line className={`st0 ${style}`} x1="41.51" y1="57.62" x2="49.76" y2="57.62"/>
        <line className={`st0 ${style}`} x1="41.41" y1="21.66" x2="49.76" y2="21.66"/>
      </svg>
      {/* logo version-2
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.65 72">
        <line className={`st0 ${style}`}  x1="0" y1="10.96" x2="33.58" y2="10.96"/>
        <line className={`st0 ${style}`}  x1="0" y1="18" x2="33.51" y2="18"/>
        <rect className="st1" x="11.56" y="18"  width="8.71" height="45.34"/>
        <rect className="st1" x="63.48" y="10.89" width="7.67" height="20.09"/>
        <rect className="st1" x="63.48" y="38.56" width="7.67" height="24.78"/>
        <line className={`st0 ${style}`}  x1="33.51" y1="10.46" x2="33.51" y2="63.34"/>
        <line className={`st0 ${style}`}  x1="40.9" y1="10.5" x2="40.9" y2="31.19"/>
        <line className={`st0 ${style}`}  x1="40.9" y1="38.56" x2="40.9" y2="63.34"/>
        <line className={`st0 ${style}`}  x1="40.45" y1="30.98" x2="64" y2="30.98"/>
        <line className={`st0 ${style}`}  x1="40.45" y1="38.56" x2="64" y2="38.56"/>
      </svg>
      */}
      
      <NavBar />
    </header>
  )
}

export default Header;