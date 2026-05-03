import React from 'react'
import { platforms } from "../data/platforms";
import { useParams } from "react-router-dom";

function Platforms() {
  const { id } = useParams();

  // find es metodo que recorre array y busca primer elemento que cumpla condicion
  // (a) seria cada articulo, como id viene de url sera siempre string
  // hay que hacerle casting ajuro
  const platform = platforms.find(
    (a) => a.id === Number(id)
  );
  
  return (
    <div className='platforms'>
      <h1>Platforms</h1>
      <section>
        <h2>Apple Music</h2>
        <a href={platform.applemusic}>
          <img src="/img/apple_music.svg" alt="" />
          Apple Music</a>
      </section>
      <section>
        <h2>Spotify</h2>
          <a href={platform.spotify}>
            <img src="/img/spotify.svg" alt="" />
            Spotify</a>
      </section>
      <section>
        <h2>Youtube Music</h2>
          <a href={platform.youtubemusic}>
            <img src="/img/youtube_music.svg" alt="" />
            Youtube Music</a>
      </section>

    </div>
  )
}

export default Platforms