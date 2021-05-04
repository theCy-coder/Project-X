import { useState } from 'react';

import Greeting from './pages/Greeting';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';

import Startup from './res/backgrounds/startup.png';
import StarryNight from './res/backgrounds/starry-night.gif';
import DayNight from './res/backgrounds/day-night.gif';
import Sunset from './res/backgrounds/sunset.gif';

function App() {

  const [ pageCount, setPageCount ] = useState(0);

  const Pages = [
    <Greeting background={Startup}/>,
    <First background={StarryNight}/>,
    <Second background={DayNight} />,
    <Third background={Sunset}/>,
  ];

  const updatePage = () => {
    if (pageCount < Pages.length-1) { 
      setPageCount(()=>pageCount+1);
    }
  }

  return (
    <div id="binder" onClick={updatePage}>
      {Pages[pageCount]}
    </div>
  );
}

export default App;
