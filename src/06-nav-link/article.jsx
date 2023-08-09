import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const Article = () => {

  const params = useParams()
  const { id } = params

  const location = useLocation()
  const { title } = location.state

  return (
    <div>
     <h1>{title}</h1> 
     <p>Id : {id}</p>
    </div>
  )
}

export default Article