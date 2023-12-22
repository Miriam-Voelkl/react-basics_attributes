import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">What is your favorite starter Pokemon?</h2>
      <label htmlFor="favorite-pokemon-charmander">
        <input
          id="favorite-pokemon-charmander"
          name="favorite-pokemon"
          type="radio"
        />
        Charmander 🔥
      </label>
      <label htmlFor="favorite-pokemon-bulbasaur">
        <input
          id="favorite-pokemon-bulbasaur"
          name="favorite-pokemon"
          type="radio"
        />
        Bulbasaur 🌱
      </label>
      <label htmlFor="favorite-pokemon-squirtle">
        <input
          id="favorite-pokemon-squirtle"
          name="favorite-pokemon"
          type="radio"
        />
        Squirtle 💧
      </label>
      <a
        className="article__link"
        href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"
      >
        Learn more about Pokemon
      </a>
    </article>
  );
}
