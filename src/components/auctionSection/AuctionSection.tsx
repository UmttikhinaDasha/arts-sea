import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import Chat from "../chat/Chat";
import { getBids } from "../../services/ApiService";

import "./AuctionSection.scss";

interface AuctionProps {
  mi?: number;
  sb?: number;
  ab?: number;
  currency?: string;
}

const AuctionSection:FC<AuctionProps> = ( {mi, sb, ab, currency} ) => {

  const renderInput = () => {
    return  <div className="chat__input-block">
              <input type="number" className="chat__input" placeholder={`${sb}`} tabIndex={1} min={sb} max={ab}/>
              <button className="auction__start-bid-btn"  tabIndex={1}>sb</button>
              <button className="auction__min-incr-btn"  tabIndex={1}>mi</button>
              <button className="auction__auto-buy-btn"  tabIndex={1}>ab</button>
            </div>
  }

  const renderBids = () => {
    const bids = getBids();
    const yoursUsername = 'Имя_пользователя';

    return (
      <ul className="chat__comments-list auction__bids-list">
        {
          bids.map(bid => {
            let classNames = "chat__comment auction__bid";
            if (bid.username === yoursUsername) {
              classNames += " chat__comment--yours"
            }
            return (
              <li className={classNames} key={bid.id}>
                Пользователь <a className="chat__comm-author" href={bid.userPageLink}>{bid.username}</a> ставит {bid.bidValue}{bid.currency}!
              </li>
            )
          })
        }
      </ul>
    )

  }

  return (
    <div className="auction">
      <div className="auction__support">
        <p><span>sb:</span>{sb}{currency} <span>mi:</span>{mi}{currency} <span>ab:</span>{ab}{currency}</p>
        <button className="auction__support-btn"  tabIndex={1}>
          <FontAwesomeIcon icon={faQuestion} className="auction__support-icon"/>
        </button>
      </div>
      <Chat renderInput={renderInput} renderMsgs={renderBids} height="458px"/>
    </div>
  )
}

export default AuctionSection;