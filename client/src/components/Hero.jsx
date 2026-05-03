import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            <img src="/img/presentationArtist.jpg" alt="" />

            <div className="float album_title">
                <section>
                    <h1>Folklore</h1>
                </section>
                <span>Nominated to <br /> Best Album of the year</span>
            </div>

            <section className="float float_billboard">
                <ul className="billboard">
                    <li>#1 Spotify USA</li>
                    <li>#1 Spotify Canada </li>
                    <li>#2 Apple Music</li>
                </ul>
                <Link to="/platforms/2">
                    <button>
                        Stream now
                        <img src="/img/arrowLink.svg" alt="" />
                    </button>
                </Link>
            </section>

        </section>
    )
}