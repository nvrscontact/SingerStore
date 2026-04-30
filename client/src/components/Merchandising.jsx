export default function Merchandising({title, subtitle, img, minutes, genre, songs, paragraph, button, buttonTwo}){
    return(
        <section className="article merchandising">
            <h1> {title} </h1>
            <span>{subtitle}</span>

            <div>
                <img src={img} alt="" />
            </div>

            <p>{paragraph}</p>
            <span className="information">more information</span>

            <ul className="buttons">
                <li>
                  <a>{button}</a>
                </li>
                
            </ul>
            
        </section>

    )
}