import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    function search() { 
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey =
            "563492ad6f91700001000001f30cedad132d41e6bf89c1c8158cc1ca";
        let pexelpApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };    
        axios.get(pexelpApiUrl, { headers : headers}).then(handlePexelsResponse);
}
 
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
          <div className="Dictionary">
            <section>
              <h1>What word do you want to look up?</h1>
              <form onSubmit={handleSubmit} >
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  placeholder="Search for a word"
                  className="form-control"
                  defaultValue={props.defaultKeyWord}
                />
              </form>
              <div className="hint">
                suggested word: sunset, wine, travel...
              </div>
            </section>
                <Results results={results} />
                <Photos photos={photos} />
          </div>
        );
    }
    else {
        load();
        return null;
    }
}
