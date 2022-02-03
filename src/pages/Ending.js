import Heart from '../res/heart.svg';

import { useState, useEffect } from 'react';

function Ending({ bg }) {
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
        <div className="container ending" style={background}></div>
        :
        <div style={loading}>
            <img id="loading-heart" src={Heart} alt="loading heart" />
       </div>
    )
}

export default Ending
