import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const TwoVideos = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [])
  
  return (
    <div className="main--container">TwoVideos</div>
  )
}

export default TwoVideos