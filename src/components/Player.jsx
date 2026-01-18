import React, { useState, useEffect } from "react";
import styles from './Player.module.css';
const key = import.meta.env.VITE_GOOGLEAPIS_KEY;

function Player({ track }) {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    async function getVideo() {
      const encodedQuery = encodeURIComponent(track.name + ' ' + track.artistName);
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedQuery}&type=video&maxResults=1&key=${key}`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setVideoId(jsonResponse.items[0].id.videoId);
        console.log(videoId);
        /*
        const ids = jsonResponse.items;
        for (let index = 0; index < ids.length; index++) {
          console.log(index);
          let result = await embeddableVideo(ids[index]);
          if (result === true) {
          }
        }
        */
      } catch (error) {
        console.error(error);
      }
    }
/*
    async function embeddableVideo(embedId) {
      try {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=player,status&id=${embedId.id.videoId}&key=${key}`;
        console.log(url);
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.items[0].status.embeddable === true) {
          setVideoId(embedId.id.videoId);
          setVideoHtml(jsonResponse.items[0].player.embedHtml);
          return true;
        }
        return false;
      } catch (error) {
        console.error(error);
      }
    }
*/
    getVideo();
  }, []);

  return (
    <div className={styles.link}>
      <a 
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    </div>
  );
}

export default Player;
