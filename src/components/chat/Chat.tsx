import { FC } from "react";
import "./Chat.scss";

interface ChatProps {
  renderMsgs(): JSX.Element;
  renderInput(): JSX.Element;
  height?: string;
}

const Chat:FC<ChatProps> = ({renderInput, renderMsgs, height}) => {

  return (
    <div className="chat"  style={{height: height}}>
      {renderInput()}
      {renderMsgs()}
    </div>
  )
}

export default Chat;