import React from "react";
import styles from "./PlayList.module.css";
import Track from "./Track.jsx";
import Player from "./Player.jsx";

function PlayList({ searchList, playList, setPlayList }) {
  function handleOnClick(e) {
    const id = e.target.id;
    const tracks = playList.filter((_blank, index) => String(index) !== id);
    setPlayList(tracks);
  }
  return (
    <>
      <h1>Play List</h1>
      <div className={styles.list}>
        {playList.map((track, index) => (
          <div className={styles.track}>
            <p className={styles.remove} id={index} track={track} onClick={handleOnClick}>
              - Remove from Playlist
            </p>
            <Track track={track} />
            <Player track={track} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayList;
