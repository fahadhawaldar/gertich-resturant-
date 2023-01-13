import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import styles from "./Gallery.module.css";


const imgs = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {
 const scrollRef = useRef();

 const scroll = (direction)=>{
  
  const {current}=scrollRef;

  if(direction ==='left'){
    current.scrollLeft -= 300;
  }else{
    current.scrollLeft += 300;

  }
 }


  return (
    <div className={`${styles.gallery} flex__center`}>
      <div className={styles.gallerycontent}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className={styles.galleryimages}>
        <div className={styles.images_container} ref={scrollRef}>
         {imgs.map((image,index)=> <div className={`${styles.imagescard} flex__center`} key={`gallery_img${index+1}`}>
         <img src={image} alt="" />
         <BsInstagram className={styles.imgicon} />
         </div> )}
        </div>
        <div className={styles.arrows}>
          <BsArrowLeftShort className={styles.arrowicon} onClick={()=>scroll('left')}/>
          <BsArrowRightShort className={styles.arrowicon} onClick={()=>scroll('right')}/>
        </div>
      </div>


    </div>
  );
};

export default Gallery;
