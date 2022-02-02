import MessageBox from '../components/MessageBox';
import Heart from '../res/heart.svg';

import { useState, useEffect } from 'react';

function Fourth({ bg }) {

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
        <div className="container fourth-page" style={background}>
            <MessageBox type="dynamic" text={"Being with you is something I want to do the rest of my life, it will undoubtedly be my greatest achievement, and it will be one I will remain proud and happy about, when I am with you I am lost in time and space, every minute spent with you is glorious, I really can’t do without you, you have become an integral part of me, I love you so much my sweetie 3.14. You are the reason I breathe, I'm so into you and I'm sure I will lose myself if I lose you, I am not afraid to say it, I will do whatever you want me to do, I just really can’t Imagine myself without you, I can say it a zillion times that your love is great, I have seen love but nothing like this, this love is exceptional, it’s out of this world. I will love you always. I love you so much Zhanelle. I'll build a great future for the both of us. Me and You vs. The World right? Till death do us part. - Truly yours, Cyrus."} />
        </div>
        :
        <div style={loading}>
            <img id="loading-heart" src={Heart} alt="loading heart" />
       </div>
    )
}

export default Fourth
