import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
        <h1>Sorry, this page doesn't exists.</h1>
        <Link to="/">Go to Home</Link>
    </section>
  )
}

export default NotFound