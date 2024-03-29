import {FC} from "react";

import "./Gallery.scss";

export interface IImage{
    id: number
    src: string
}
interface GalleryProps {
  onSetModalOpen?(imgSrc?: string): void;
  images?: IImage[];
}

const Gallery:FC<GalleryProps> = (props) => {

  const {onSetModalOpen, images} = props;

  const imagesGallery = images?.map((img ?: {id: number, src: string}) => (
      <div className="masonry-brick masonry-brick--h"
           tabIndex={0}
           key={img?.id}
           onClick={() => onSetModalOpen?.(img?.src)}>
        <img className='masonry-img'
             src={img?.src}
            //  alt={img?.src}
          />
      </div>
    ));


  return (
    <div className="gallery">
      <div className="masonry">
        {imagesGallery}
      </div>
    </div>
  )
}

export default Gallery;