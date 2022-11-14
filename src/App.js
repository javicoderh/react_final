import logo from './logo.svg';
import './App.css';
import { IndexLinks } from './components/index/Index';
import ScrumIndex from './components/scrum/ScrumIndex';
import ScrumOverview from './components/scrum/ScrumOverview';
import ScrumHistory from './components/scrum/ScrumHistory';
import DevSkillsOverview from './components/devSkills/DevSkills';
import { HtmlDetails, CssDetails, SassDetails, JsDetails, ReactDetails, FigmaDetails } from './components/devSkills/DevSkillsDetails';
import { BrowserRouter, Route, Routes, Link, NavLink, Outlet } from "react-router-dom";
import Router from './components/router/Router';
import StickyNav from './components/index/Nav';
import { VisualDiv } from './components/backup/VisualDiv';
import { Logout } from './components/login/Logout';
import { UserWelcome } from './components/login/Welcome';
import { LoginButton } from './components/login/Login';
import StateEffect from './components/projects/StateEffect';
import { Button } from '@mui/material';
import { Header } from './components/projects/Header';
import AppRender from './components/app/App';



function App() { 

  return (
    <div className="App">      
    <AppRender />          
    </div>
    );
  }

export default App;
