import MessageBox from '../components/MessageBox';
function Third({background: BackgroundImage}) {
    const background = {
        backgroundImage: `url(${BackgroundImage})`
    }
    return (
        <div style={background} className="container third-page">
            <MessageBox title="Fun Fact!" type="dynamic" text="The sun is not the brightest thing, 
It's your existence and you came at the right time." />
        </div>
    )
}

export default Third
