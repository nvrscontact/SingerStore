import React from 'react'
import Article_Albums from '../components/subcomponents/Article_Albums'

function Albums() {
  return (
    <>
      <section className='albums'>
        <Article_Albums id={1} title={"Red"} subtitle={"Album"} img={"/img/red_album.jpg"} date={"June 2011"} />
        <Article_Albums id={2} title={"Folklore"} subtitle={"Deluxe Version"} img={"/img/folklore_album.jpg"} date={"May 2013"} />
        <Article_Albums id={3} title={"Midnights"} subtitle={"New Album"} img={"/img/midnights_album.jpg"} date={"May 2013"} />
        <Article_Albums id={4} title={"Style"} subtitle={"Deluxe Version"} img={"/img/style_album.jpg"} date={"May 2013"} />
      </section>
    </>
  )
}

export default Albums