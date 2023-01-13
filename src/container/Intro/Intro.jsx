import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPause } from "react-icons/bs";
import { meal } from "../../constants";
import styles from "./Intro.module.css";

const Intro = () => {
  const [playVideo, setPlayvideo] = useState(false);
  const videoRef = useRef();

  const videoHandler = () => {
    setPlayvideo((prevSate) => !prevSate);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className={styles.video}>
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className={`${styles.videooverlay} flex__center`}>
        <div
          className={`${styles.overlaycircle} flex__center`}
          onClick={videoHandler}
        >
          {playVideo ? (
            <BsPause color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
