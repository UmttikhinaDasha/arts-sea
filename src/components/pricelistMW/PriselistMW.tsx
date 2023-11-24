import {FC} from "react";
import ReactDOM from 'react-dom';
// import ReactSwipe from 'react-swipe';
import ModalWindow from "../modalWindow/ModalWindow";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { getPriceList } from "../../services/ApiService";


import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// import "antd/dist/antd.css";

import "./PricelistMW.scss";

// import 'lightbox.js-react/dist/index.css'
// import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

interface PricelistMWProps {
  onSetModalClose?(): void;
  // images?: [{id: number, src: string}];
}

const PriceList:FC<PricelistMWProps> = ({onSetModalClose}) => {

  const images = getPriceList();
  console.log("images " + images[0])
  // let reactSwipeEl;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true
  }

  const renderImages = () => {
    return images?.map(image => (
      <div key={image.id} className="pricelist-img-wrapper">
        <img src={image.src} className="pricelist-img"/>
      </div>
    ))
  }

  // const Arrow = ({ type }) => (
  //   <Icon type={type} />
  // );

  return (
    <ModalWindow onSetModalClose={onSetModalClose}>
      <div className="pricelist-wrapper">
      <Carousel arrows
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
      >
        {renderImages()}
        {/* {["1", "2", "3"].map((v) => (
          <div>
            <div>{v}</div>
          </div>
        ))} */}
      </Carousel>
      {/* <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
        childCount={images.length}
      >
        {renderImages()}
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
      {/* <div className="pricelist-wrapper">
      <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
  <img className='w-full rounded pricelist-img' src='https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
  <img className='w-full rounded pricelist-img' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />  
  <img className='w-full rounded pricelist-img' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
 
</SlideshowLightbox> 
      </div>
       */}
      {/* <div className="pricelist-wrapper">
        <Slider {...settings} className="slider">
          {renderImages()}
          {/* <img className="child" src={images[0].src}/> */}
        {/* </Slider>
      </div> */}
      {/* <div className="modal__wrapper">
      <Slider {...settings} className="slider">
          {renderImages()} */}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
      {/* </Slider>
      </div> */}
      
    </ModalWindow>
  )
}

export default PriceList;