import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import SearchResults from "./components/SearchResults.jsx";
import PlayList from "./components/PlayList.jsx";
const API_URL = import.meta.env.VITE_SHAZAM_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    getTracks();
  }, [query]);

  async function getTracks() {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://shazam.p.rapidapi.com/v2/search?term=${encodedQuery}&locale=en-US&offset=0&limit=10`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${VITE_SHAZAM_KEY}`,
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const tracks = jsonResponse.results.songs.data.map((hit) => hit.attributes);
      setSearchList(tracks);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="title">Music Box</h1>
      <SearchBar setQuery={setQuery} />
      <div className="lists">
        <div className="searchList">
          <SearchResults
            searchList={searchList}
            playList={playList}
            setPlayList={setPlayList}
          />
        </div>
        <div className="playList">
          <PlayList
            searchList={searchList}
            playList={playList}
            setPlayList={setPlayList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
