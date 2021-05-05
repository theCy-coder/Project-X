import MessageBox from '../components/MessageBox';
import Heart from '../res/heart.svg';

import { useState, useEffect } from 'react';

function Greeting({bg}) {
    const [ ready, isReady ] = useState(false);
    const [ BackgroundImage, setBackgroundImage ] = useState("");


    useEffect(() => {
       if(!ready){ 
           (
            async()=>{
                await fetch(bg)
                .then(res=>{
                    setBackgroundImage(res.url);
                    setTimeout(() => {
                        isReady(true);
                    }, 100);
                })
            }
        )();
        }
    }, [ready, BackgroundImage, bg])


    const background ={
        backgroundImage: `url(${BackgroundImage})`,
    }


    const loading = {
        backgroundColor: "#222",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }



    return (
       (ready)
       ?
       <div style={background} className="container greeting">
        <div className="poster">
            <h1>HAPPY 18<sup>TH</sup> BIRTHDAY SHARLYN!</h1>
            <p>Enjoy your day with a smile!</p>  
        </div>
        <div className="page-notes">
            <MessageBox type="static" text="Take your time to read my messages for you."/>
            <pre>Press anywhere to start...</pre>
        </div>
       </div>
       : 
       <div style={loading}>
            <img id="loading-heart" src={Heart} alt="loading heart" />
       </div>
    )
}

export default Greeting
