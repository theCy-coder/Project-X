import MessageBox from '../components/MessageBox';
import Heart from '../res/heart.svg';

import { useState, useEffect } from 'react';

function Third({ bg }) {
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
        <div style={background} className="container third-page">
            <MessageBox title="Fun Fact!" type="dynamic" text="The sun is not the brightest thing, 
It's your existence and you came at the right time." />
        </div>
        :
        <div style={loading}>
            <img id="loading-heart" src={Heart} alt="loading heart" />
        </div>
    )
}

export default Third
