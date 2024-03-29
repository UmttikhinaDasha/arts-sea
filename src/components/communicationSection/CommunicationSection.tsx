import { useState } from 'react';

import AuctionSection from '../auctionSection/AuctionSection';
import CommentsSection from '../commentsSection/CommentsSection';

import "./CommunicationSection.scss";

const CommunicationSection = () => {

  const [switcher, setSwitcher] = useState(true);

  const onSwitch = () => {
    setSwitcher(switcher => !switcher);
  }

  return (
    <div className="modal__communication-section">

      <button className="modal__toggle-comm-block-btn" tabIndex={1} onClick={onSwitch}>{switcher ? "Аукцион" : "Комментарии"}</button>

      {
        switcher ? <CommentsSection/> : <AuctionSection mi={5} sb={50} ab={150} currency="usd"/>
      }

    </div>
  )
}

export default CommunicationSection;