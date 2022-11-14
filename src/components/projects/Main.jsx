import React from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
import LoginContext from "../contexts/LoginContext";


export const Main = ({}) => {
  const{ theme, handleTheme } = useContext(ThemeContext)
  const{ texts, handleLanguage } = useContext(LanguageContext)
  const{ auth, handleAuth } = useContext(LoginContext)
return (
<main className={theme}>
  {auth? <div class="mainContent"><h2 className="themeH2">
  {texts.mainSubtittle1}
  </h2>
  <p className="themeP">{texts.mainWelcome}</p>
  <p className="themeP">
  {texts.mainPar1}
  </p>  
  </div> : <p className="themeP">{texts.notAuthenticated}</p>}
  </main>
)};