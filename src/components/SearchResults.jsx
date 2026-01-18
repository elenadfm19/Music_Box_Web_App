import React from "react";
import styles from "./SearchResults.module.css";
import Track from "./Track.jsx";
import { getTrackThumbnail } from "../helpers/getTrackThumbnail.js";

function SearchResults({ searchList, playList, setPlayList }) {


  function handleOnClick(e) {
    const id = e.target.id;
    const tracks = [...playList, searchList[id]];
    setPlayList(tracks);
  }
  console.log("entro a searchresults");
  console.log(searchList);

  return (
    <>
      <h1>Search List</h1>
      <div className={styles.list}>
        {searchList.map((track, index) => (
          <div className={styles.track}>
            <p className={styles.add} onClick={handleOnClick} id={index}>
              + Add to Playlist
            </p>
            <Track
              track={track}
              thumbnail={getTrackThumbnail(track)}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
