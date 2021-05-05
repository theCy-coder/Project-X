import { useState } from 'react';

import Greeting from './pages/Greeting';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Ending from './pages/Ending';

import Startup from './res/backgrounds/startup.png';
import StarryNight from './res/backgrounds/starry-night.gif';
import DayNight from './res/backgrounds/day-night.gif';
import Sunset from './res/backgrounds/sunset.gif';
import CoupleDark from './res/backgrounds/couple-dark.gif';
import Dancing from './res/backgrounds/dancing.gif';

import './styles/components/MessageBox.scss';

function App() {

  const [ pageCount, setPageCount ] = useState(0);

  const Pages = [
    <Greeting bg={Startup}/>,
    <First bg={StarryNight}/>,
    <Second bg={DayNight} />,
    <Third bg={Sunset}/>,
    <Fourth bg={CoupleDark}/>,
    <Ending bg={Dancing}/>,
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
