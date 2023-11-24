import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./ModalWindow.scss";

interface ModalWindowProps {
  onSetModalClose?(): void;
}


const ModalWindow:FC<ModalWindowProps> = (props) => {

  const {onSetModalClose} = props;

  useEffect(() => {
      const onKeyDown = (e : KeyboardEvent) => {
        if (e.code === "Escape") onSetModalClose?.();
      }
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const onClickingOut = (e : MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSetModalClose?.();
    }
  }

  const onClickExit = (e : MouseEvent) => {
    onSetModalClose?.();
  }

  return (
    <div className="modal" onClick={e => onClickingOut(e)}>
      <div className="modal__dialog">
        <div className="close-wrapper">
         <FontAwesomeIcon icon={faXmark} className="modal__close" tabIndex={-1} onClick={e => onClickExit(e)}/>
        </div>
        <div className="modal__content">

          {props.children}

        </div>
      </div>
    </div>
  )
}

export default ModalWindow;