import { Link } from "react-router-dom";

export default function Merchandising({ title, subtitle, img, minutes, genre, songs, paragraph, button, buttonTwo }) {
    return (
        <section className="article merchandising">
            <h1> {title} </h1>
            <span>{subtitle}</span>

            <div>
                <img src={img} alt="" />
            </div>

            <p>{paragraph}</p>
            <span className="information">more information</span>

            <ul className="buttons">
                <Link to="/merch_store" className="glasmorphism_button">
                    Shop Now
                    <img src="/img/arrowLink.svg" alt="" />
                </Link>
            </ul>

        </section>

    )
}