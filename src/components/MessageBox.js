import Typical from '../react-typical/index.js';

function MessageBox({onClick, text, type, title}) {
    return (
        <div onClick={onClick} id="MessageBox" className="MessageBox">
            {
                (title)
                ?
                    <div id="MsgBox-TitleContainer">
                        <h2>{title}</h2>
                    </div>
                :
                    <>
                    </>
            }
            <div id="MsgBox-TextContainer">
                <p id="text-holder">
                    <Typical
                    loop="1"
                    wrapper="span"
                    steps={(Array.isArray(text))? text.flat(): [text]}
                    />
                </p>
                {
                    (type==="dynamic")
                        ? <strong>&#9660;</strong>
                        :(type==="static")? <></>
                        : <></>
                }
            </div>
        </div>
    )
}

export default MessageBox
