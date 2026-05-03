import React from 'react'
import One_Button from './One_Button'

function Article_Albums({ id, title, subtitle, img, date, url }) {
  return (
    <>
      <section className='articleAlbums'>
        <h1>{title}</h1>
        <span>{subtitle}</span>

        <div>
          <img src={img} alt="" />
          <span>{date}</span>
        </div>



        <ul className="buttons">
          <One_Button url={`/platforms/${id}`} msg={"Listen Album"} img={"/img/arrowLink.svg"} />
        </ul>
      </section>
    </>
  )
}

export default Article_Albums