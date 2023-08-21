import "../css-files/chatmodal.css"

const ChatModal = () => {

    const closeChat = () => {
        document.getElementById("chat-modal").style.display = "none";
    }

    return ( 
<div id="chat-modal">
    <div id="chat">
<div className="chatheader">
    <h5>Chatting with Office Deejay</h5>
    <img src="cross.png" alt="" onClick = {closeChat} />
</div>
<div className="chatbody"></div>
    <input type="text" id = "chatboxmessageentryinput" placeholder = "Type message" />
    <button id = "ok-button" >
        <h3>Ok</h3>
    
    </button>
</div>
</div>

     );
}
 
export default ChatModal;