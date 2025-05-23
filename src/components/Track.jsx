import React from "react";
import styles from "./Track.module.css";

function Track({ track }) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Track: {track.title}</p>
          <br />
          <p>Artist: {track.subtitle}</p>
          <br />
        </div>
        <img src={track.share.image} />
      </div>
      
    </>
  );
}

export default Track;
