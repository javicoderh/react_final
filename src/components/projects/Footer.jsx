import React from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";
import LoginContext from "../contexts/LoginContext";


export const Footer = () => {
const{ theme, handleTheme } = useContext(ThemeContext);
const{ texts, handleLanguage } = useContext(LanguageContext)
return(
<footer className={theme}>  
  <h5>
  {texts.footerText}
  </h5>
</footer>
)};