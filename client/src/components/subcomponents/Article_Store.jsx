import React from 'react'
import { Link } from 'react-router-dom'
import One_Button from './One_Button'

function Article_Store({title,subtitle,img,height,url}) {
  return (
    <section className='articleStore'>
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <img className='img_article' src={img} alt="" style={height={height}} />
        
            <ul className="buttons">
                <Link to={url} className="glasmorphism_button">
                    Buy Albums
                </Link>
            </ul>
    </section>
  )
}

export default Article_Store