import React from "react";
import Router from "../router/Router";

function AppRender() {

  return(

<header className="App-header">
<div className='indexHeader'>
  <div className='headerFirstLine'>
  <a href='/'><img src="https://scontent.fkna2-1.fna.fbcdn.net/v/t39.30808-6/311318312_2344342782387191_419389458548399302_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VH7tc2mp18AAX8pufWt&_nc_ht=scontent.fkna2-1.fna&oh=00_AfCaNLhutUZOxLVsTteWSo4cTyw1VdtROWCKvTxeIM-WEg&oe=637291DA" className='Logo' alt="logo"></img></a>
  <h1 className='tittle'>Javier Bravo Zapico</h1>
  </div>
  <h2 className='subtittle'>Developer Briefcase</h2>                                                    
</div>
<div className='overView'>
          <h5 className='jobQuote'>Looking for a junior front end developer job</h5>
            <Router/>                                               
        </div>
        <div className='linksContainer'>                                                          
        </div>        
        <footer>          
          <div className='visualDiv bottom'></div>
          <h4 className='footQuote'>Learning is an endless loop ...</h4>
        </footer>
</header> 
)
}                   

export default AppRender