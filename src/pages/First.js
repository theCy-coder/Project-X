import MessageBox from '../components/MessageBox';
import Heart from '../res/heart.svg';

import { useState, useEffect } from 'react';

function First({ bg }) {
    const [ ready, isReady ] = useState(false);
    const [ BackgroundImage, setBackgroundImage ] = useState("");

    useEffect(() => {
       if(!ready){ 
           (
            async()=>{
                await fetch(bg)
                    .then(img=>{
                        setBackgroundImage(img.url)
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
        <div className="container first-page" style={background}>
            <MessageBox type="dynamic" text="All the gloomy days just seem to shine more brightly because of you." />
            
        </div>
        : <div style={loading}>
            <img id="loading-heart" src={Heart} alt="loading heart" />
        </div>
    )

}


export default First;
