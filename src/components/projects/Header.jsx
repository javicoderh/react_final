import React from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
import LoginContext from "../contexts/LoginContext";

export const Header = ({}) => {
const{ theme, handleTheme } = useContext(ThemeContext)
const{ texts, handleLanguage } = useContext(LanguageContext)
const{ auth, handleAuth } = useContext(LoginContext)
 return (

  <header className={theme}>
   <h1 className="themeH1">
    {texts.tittle}
   </h1>
   <select className="themeSelect" name="language" onChange={handleLanguage}>
   <option value="en">Language</option>
    <option value="es">Español</option>
    <option value="en">English</option>
    <option value="por">Português</option>
   </select>
   <br></br>
   <br></br>
   <input 
   className="themeInput"
   type="radio" 
   name="theme" 
   id="light" 
   onClick={handleTheme} 
   value="light" 
   />
   <label className="themeLabel" htmlFor="light">{texts.headerLight}</label>
   <input 
   className="themeInput"
   type="radio" 
   name="theme" 
   id="dark" 
   onClick={handleTheme} 
   value="dark" 
   />
   <label className="themeLabel" htmlFor="dark">{texts.headerDark}</label>
   <input 
   className="themeInput"
   type="radio" 
   name="theme" 
   id="fire" 
   onClick={handleTheme} 
   value="fire" 
   />
   <label className="themeLabel" htmlFor="fire">{texts.headerFire}</label>
   <input 
   className="themeInput"
   type="radio" 
   name="theme" 
   id="water" 
   onClick={handleTheme} 
   value="water" 
   />
   <label className="themeLabel" htmlFor="water">{texts.headerWater}</label>
   <br></br>
   <br></br>
   <button onClick={handleAuth}>{auth? texts.buttonLogout : texts.buttonLogin}</button>  
  </header>
  
 )};