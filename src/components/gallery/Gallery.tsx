import {FC} from "react";

import "./Gallery.scss";

interface GalleryProps {
  onSetModalOpen?(imgSrc?: string): void;
  images?: [{id: number, src: string}];
}

const Gallery:FC<GalleryProps> = (props) => {

  const {onSetModalOpen, images} = props;

  const renderGallery = () => {

    return images?.map((img ?: {id: number, src: string}) => (
      <div className="masonry-brick masonry-brick--h" 
           tabIndex={0}
           key={img?.id} 
           onClick={e => onSetModalOpen?.(img?.src)}>
        <img className='masonry-img'
             src={img?.src}
          />
      </div>
    ));
  }

  return (
    <div className="gallery">
      <div className="masonry">
        {renderGallery()}
      </div>
    </div>
  )
}

export default Gallery;