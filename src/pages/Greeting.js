import MessageBox from '../components/MessageBox';

function Greeting({background: BackgroundImage}) {
    const background = {
        backgroundImage: `url(${BackgroundImage})`
    }
    return (
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
    )
}

export default Greeting
