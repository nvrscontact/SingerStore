export default function AlbumPresentation({title, subtitle, img, minutes, genre, songs, paragraph, button, buttonTwo}){
    return(
        <section className="article albumPresentation">
            <h1> {title} </h1>
            <span>{subtitle}</span>

            <div>
                <img src={img} alt="" />
                    <ul>       
                        <li>{minutes}</li>
                        • 
                        <li>{genre}</li>
                        • 
                        <li>{songs}</li>
                    </ul>
            </div>

            <p>{paragraph}</p>
            <span className="information">more information</span>

            <ul className="buttons">
                <li>
                <a>{button}</a>
                </li>
                <li>
                <a>{buttonTwo} <img src="/img/musicalNote.svg" alt="" /></a>
                </li>
            </ul>
        </section>
    )
}