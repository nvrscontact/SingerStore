import { Link } from "react-router-dom";

export default function AlbumPresentation({ title, subtitle, img, minutes, genre, songs, paragraph, button, buttonTwo }) {
    return (
        <section className="article albumPresentation">
            <h1> {title} </h1>
            <span>{subtitle}</span>

            <div>
                <img src={img} alt="" />
                <ul>
                    <li>{minutes}</li>
                    <li>{genre}</li>
                    <li>{songs}</li>
                </ul>
            </div>

            <p>{paragraph}</p>
            <span className="information">+ More information</span>

            <ul className="buttons">
                <Link to="/platforms/2" className="glasmorphism_button">
                    Hear Album
                    <img src="/img/arrowLink.svg" alt="" />
                </Link>
                <Link to="/albums_store" className="glasmorphism_button">
                    Buy Album
                </Link>
            </ul>
        </section>
    )
}