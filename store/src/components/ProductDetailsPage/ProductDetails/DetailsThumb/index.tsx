/*DetailsThumb.tsx*/

import React, { Component, ReactNode, RefObject } from 'react';

import styles from "../../../../styles/modular/ProductDetails/ProductDetails.module.css"
import { StaticImageData } from 'next/image';
import { Image } from '../../../../types/general';
import { formatImage } from '../../../../Helpers/helpers';

interface DetailsThumbProps {
  images: Image[] | undefined;
  tab: (index: number) => void;
  myRef: RefObject<HTMLDivElement>;
}




const DetailsThumb = ({images,tab,myRef} : DetailsThumbProps ) => {
  
  return <>
    <div className={styles.thumb} ref={myRef}>
        {images?.map((img, index) => (
          <img
            src={formatImage(img.image)}
            alt=""
            key={index}
            onClick={() => tab(index)}
          />
        ))}
  </div>
  </>
  
}

/* class DetailsThumb extends Component<DetailsThumbProps> {
  render(): ReactNode {
    const { images, tab, myRef } = this.props;
    return (
      <div className={styles.thumb} ref={myRef}>
        {images.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => tab(index)}
          />
        ))}
      </div>
    );
  }
} */

export default DetailsThumb;
