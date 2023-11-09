import {FC} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./ImageSection.scss";

interface ImageSectionProps {
  imgSrc?: string;
}

const ImageSection:FC<ImageSectionProps> = (props) => {

  const {imgSrc} = props;

  return (
    <div className="modal__img-section">

      <div className="modal__username">Имя_автора</div>

      <div className="modal__img-block">
        <div className="modal__img-wrapper">
          <img
            className='modal__img'
            src={imgSrc}
          />
        </div>
        <div className="modal__btns-container">
          <button className="modal__like-btn">
            <FontAwesomeIcon className="modal__like-icon" icon={faHeart}/>
          </button>
          <button className="modal__subscribe-btn">Подписаться</button>
        </div>
      </div>
      
      <div className="modal__tags">#fantasy #art #witcher #forest</div>
      
    </div>
  )
}

export default ImageSection;