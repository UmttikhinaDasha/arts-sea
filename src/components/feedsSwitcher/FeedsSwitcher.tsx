import { FC, useState } from "react";
import "./FeedsSwitcher.scss"

interface FeedsSwitcherProps {
  feedsNames?: string[];
}

const FeedsSwitcher:FC<FeedsSwitcherProps> = ({feedsNames}) => {

  const [activeFeedName, setActiveFeedName] = useState<string>("новые работы");

  const onFeedChange = (feedName: string) => {
    setActiveFeedName(feedName);
    //тут должна быть отправка запроса на получение артов по выбранному полю
  }
  
  const renderBtns = () => {

    return (
      feedsNames?.map((feedName, i) => {
        
        let classNames = 'swither__feed-btn';

        if (feedName === activeFeedName) {
          classNames += ' active';
        }

        return (
          <button key={i} 
                  className={classNames} 
                  name={feedName}
                  onClick={e => onFeedChange(e?.target?.name)}>
            {feedName.toUpperCase()}
          </button>
        )
      })
    )
  }

  return (
    <div className="switcher">
      {renderBtns()}
    </div>
  )
}

export default FeedsSwitcher;