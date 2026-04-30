export default function WidgetSpotify(){
    return(
        <section className="widgetSpotify">
            <h1>Available on Spotify</h1>

            <iframe className="hasd" data-testid="embed-iframe" src="https://open.spotify.com/embed/album/2fenSS68JI1h4Fo296JfGr?utm_source=generator&theme=0"  height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                <ul>
                    <li>
                        <img src="/img/youtube_music.svg" alt="" />
                        <a href="https://music.youtube.com/channel/UCqECaJ8Gagnn7YCbPEzWH6g">Youtube Music</a>    
                    </li>
                    <li>
                        <img src="/img/apple_music.svg" alt="" />
                        <a href="https://music.apple.com/es/artist/taylor-swift/159260351">Apple Music</a>    
                    </li>
                    <li>
                        <img src="/img/spotify.svg" alt="" />
                        <a href="https://music.apple.com/es/artist/taylor-swift/159260351">Spotify</a>    
                    </li>
                 
                </ul>  
       
        </section>
    )
}