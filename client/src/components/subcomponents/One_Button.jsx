import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function One_Button({ url, msg, img }) {
  const navigate = useNavigate();

  return (
    <>
    {/* para usar usenavigate en este ejemplo espera un string, no un objeto por eso no usar {}*/}
      <button className='one_Button' onClick={() => navigate(url)}>
        {msg}
      </button>
    </>
  )
}

export default One_Button