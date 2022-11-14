import React from "react"; 
import { BrowserRouter, HashRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import DevSkillsOverview from "../devSkills/DevSkills";
import { HtmlDetails } from "../devSkills/DevSkillsDetails";
import { IndexLinks } from "../index/Index";
import StickyNav from "../index/Nav";
import { CssDetails } from "../devSkills/DevSkillsDetails";
import { SassDetails } from "../devSkills/DevSkillsDetails";
import { ReactDetails } from "../devSkills/DevSkillsDetails";
import { JsDetails } from "../devSkills/DevSkillsDetails";
import { FigmaDetails } from "../devSkills/DevSkillsDetails";
import ScrumIndex from "../scrum/ScrumIndex";
import ScrumOverview from "../scrum/ScrumOverview";
import ScrumHistory from "../scrum/ScrumHistory";
import { ScrumHistory2, ScrumHistory3 } from "../scrum/ScrumHistoryComponents";
import { Roles } from "../scrum/ScrumRoles";
import { LoginButton } from "../login/Login";
import { Logout } from "../login/Logout";
import { UserWelcome } from "../login/Welcome";
import { GalleriesIndex } from "../galleries/Galleries";
import StateEffect from "../projects/StateEffect";
import { ThemedIndex } from "../projects/ThemedIndex";
import ContactForm from "../contact/Contact";
import { Formik } from "formik";

export default function Router() {  
return (
  <div>  
<HashRouter>
<Routes> 
  <Route path="/" element={<LoginButton/>}/>          
  <Route path="/index" element={<StickyNav/>}>     
  <Route path="/index" element={<IndexLinks/>}/>  
  </Route> 
  <Route path="/contact" element={<ContactForm />}/>
  <Route path="/projects" element={<ul className="projList">
    <h2>Projects</h2>
    <Link to="/stateeffect">
    <li>useState + useEffect</li>
    </Link>
    <Link to="/usecontext">
    <li>useContext</li>
    </Link>
        
    <Link to="/index"><button id="projectBackButton" className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link>
    
    </ul>}
    />  
  <Route path="/stateeffect" element={<StateEffect />}/>
  <Route path="/usecontext" element={<ThemedIndex />}/>
  <Route path="/devSkills" element={<DevSkillsOverview/>}>
  <Route path="/devSkills" element={<Link to="/index"><button className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>back</h5></button></Link>}/>
  <Route path="/devSkills/html" element={<HtmlDetails />}/>
  <Route path="/devSkills/css" element={<CssDetails />}/>
  <Route path="/devSkills/sass" element={<SassDetails />}/>
  <Route path="/devSkills/js" element={<JsDetails />}/>
  <Route path="/devSkills/react" element={<ReactDetails />}/>
  <Route path="/devSkills/figma" element={<FigmaDetails />}/>
  </Route>
  <Route path="/scrumov" element={<ScrumOverview />}>
  <Route path="/scrumov" element={<ScrumIndex />}/>
  <Route path="/scrumov/history" element={<ScrumHistory />}/>
  <Route path="/scrumov/history2" element={<ScrumHistory2 />}/>
  <Route path="/scrumov/history3" element={<ScrumHistory3 />}/>
  <Route path="/scrumov/roles" element={<Roles />}/>
  </Route> 
  <Route path="*" element={<div className="underConstruction"><img src="https://webngfx.com/wp-content/uploads/2021/11/website-development.svg" height="150"></img><h5 className="uConstruction">sorry this section is under construction...</h5><a href="/index"><button className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5>Home</h5></button></a></div>}/>  
  <Route path="/galleries" element={<GalleriesIndex />}/>
</Routes>
</HashRouter>

</div>
)}

