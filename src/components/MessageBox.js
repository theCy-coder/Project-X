import Typical from 'react-typical';

function MessageBox({text, type, title}) {
    return (
        <div id="MessageBox" className="MessageBox">
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
                    wrapper="em"
                    steps={[text]}
                    />
                </p>
                {
                    (type==="dynamic")
                        ? <span>&#9660;</span>
                        :(type==="static")? <></>
                        : <></>
                }
            </div>
        </div>
    )
}

export default MessageBox
