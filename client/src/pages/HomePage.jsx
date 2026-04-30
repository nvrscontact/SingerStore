import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AlbumPresentation from '../components/AlbumPresentation'
import Merchandising from '../components/Merchandising'
import WidgetSpotify from '../components/WidgetSpotify'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

function HomePage() {
  return (
    <>
      <Hero />

      <AlbumPresentation title="Folklore" subtitle="New Album"
        img="/img/folklore_album.jpg" minutes="44 minutes"
        genre="Pop" songs="13 Songs"
        paragraph="A beautiful album created by this magnificent artist for that people that need to enhance their creativity for the rest of their lives"
        button="Shop Now" buttonTwo="Hear now" />

      <Merchandising title="Summer Collection" subtitle="T-shirt Sport - Running"
        img="/img/ShirtMerchandising.png"
        paragraph="A beautiful album created by this magnificent artist for that people that need to enhance their creativity for the rest of their lives"
        button="Shop Now" buttonTwo="Hear now" />

      <Newsletter title={"Newsletter"} subtitle={"To receive updates"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio "}
        p2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vero and all that what you think is very nice of you part to say that to me, i'm so happy about that."}
        button={"Subscribe in"} />

      <WidgetSpotify />
    </>
  )
}

export default HomePage