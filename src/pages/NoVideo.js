import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const NoVideo = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])
  
  return (
    <div className="main--container">NoVideo</div>
  )
}

export default NoVideo