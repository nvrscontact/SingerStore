import React from 'react'
import { Link } from 'react-router-dom'
import One_Button from './One_Button'

function Article_Store({title,subtitle,img,height,button}) {
  return (
    <section className='articleStore'>
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <img src={img} alt="" style={height={height}} />
        
        <One_Button url={"/albumspurchases"} msg={"Buy Now"} img={"/img/arrowLink.svg"}/>

    </section>
  )
}

export default Article_Store