import MessageBox from '../components/MessageBox';
import '../styles/components/MessageBox.scss';

function First({background: BackgroundImage}) {
    (()=>{
        console.log(BackgroundImage)
    })();
    const background = {
        backgroundImage: `url(${BackgroundImage})`
    }
    return (
        <div className="container first-page" style={background}>
            <MessageBox type="dynamic" text="All the gloomy days just seem to shine more brightly because of you." />
        </div>
    )

}


export default First;
