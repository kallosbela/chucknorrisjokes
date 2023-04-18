import React, { useState, useEffect } from "react";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("");
  
  const keywords = ["sex", "fuck", "tits", "penis", "sperm", "ass"];
  const isUglyWord = (joke) => {
    if (joke.length===0) {return true}
    for (let i = 0; i < keywords.length; i++) {
      if (joke.toLowerCase().includes(keywords[i])) {
        return true;
      }
    }
    return false;
  };

  const getJoke = async () => {
    let current = ""
    while (isUglyWord(current)) {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      current = response.data.value.toLowerCase();
      console.log(current);
      setJoke(response.data.value);
    }
  };

  useEffect(() => {
    getJoke()
  }, []);

  return <div>{joke && <p>{joke}</p>}</div>;
};

export default Joke;
