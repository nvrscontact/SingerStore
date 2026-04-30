export default function Newsletter({title,subtitle,p1,p2,button}){
    return(
        <section className="article newsletter">
            <h1>{title}</h1>
            <span>{subtitle}</span>

            <div>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>

            <ul className="buttons">
                <li>
                    <a>{button}</a>
                </li>
            </ul>
        </section>
    )
}