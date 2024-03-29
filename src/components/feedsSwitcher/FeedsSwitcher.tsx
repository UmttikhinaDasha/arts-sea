import { FC, MouseEvent, useState } from "react";
import "./FeedsSwitcher.scss"
import clsx from "clsx";

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
        return (
          <button key={i}
                  className={clsx('swither__feed-btn', feedName === activeFeedName && 'active')}
                  name={feedName}
                  onClick={() => onFeedChange(feedName)}>
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