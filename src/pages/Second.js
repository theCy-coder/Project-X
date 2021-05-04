import MessageBox from '../components/MessageBox';
function Second({background: BackgroundImage}) {
    const background = {
        backgroundImage: `url(${BackgroundImage})`
    };
    return (
        <div className="container second-page" style={background}>
             <MessageBox type="dynamic" text="I'd live a million times to choose the same person that made me feel this way. You. " />
        </div>
    )
}


export default Second
