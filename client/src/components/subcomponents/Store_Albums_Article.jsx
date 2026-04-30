import React from 'react'
import { Link } from 'react-router-dom'

function Store_Albums_Article({title,description,price,img,version,edition}) {
    return (
        <div className='store_albums_article'>
            <section>
                <h1>{title}</h1>
                <span>{edition} </span>
            </section>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit numquam aperiam tempore, vitae autem sunt placeat excepturi cupiditate accusantium*/}
            <p>{description}</p>
            <section>
                <img src={img} alt="" />
                <span>&lt; 1 / 3 &gt;</span>
            </section>
            <section>
                {/* Midnights Album Moonlight Edition */}
                <p>{version}</p>
                <span>{price} €</span>
            </section>
            <section>
                <button>
                    <Link to="/buy">Buy Album</Link>
                </button>
                <button>
                    <Link to="/buy">+ 1</Link>
                </button>
            </section>
            <section>
                <details>
                    <summary>Tracklist <img src="/img/arrowDown.svg" alt="" /></summary>
                    Hola
                </details>
                <details>
                    <summary>Description <img src="/img/arrowDown.svg" alt="" /></summary>
                    D
                </details>
            </section>
        </div>
    )
}

export default Store_Albums_Article