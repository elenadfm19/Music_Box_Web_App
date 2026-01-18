import React from "react";
import styles from "./Track.module.css";

function Track({ track, thumbnail }) {
  
  return (
    <>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>Track: {track.name}</p>
          <br />
          <p>Artist: {track.artistName}</p>
          <br />
          <p>Album: {track.albumName}</p>
          <br />
        </div>
        <img src={thumbnail} />
      </div>
    </>
  );
}

export default Track;
