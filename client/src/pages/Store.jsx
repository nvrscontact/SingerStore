import React from 'react'
import Article_Store from '../components/subcomponents/Article_Store';

function Store() {
  return (
    <section className='store' >

    <Article_Store title="Albums" subtitle={"Complete Discography"} img="/img/folklore_album.jpg" button="Buy Now"/>
    <Article_Store title="Merch" subtitle={"New Summer Offers"} img="/img/ShirtMerchandising.png" height="300px" button="Buy Now"/>

    </section>
  )
}

export default Store