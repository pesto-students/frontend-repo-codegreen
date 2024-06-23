import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-beige">
      
       
        <p className="text-3xl">Oops! Something went wrong.</p>
        <Link to="/">
        <Button text="Go to homepage"></Button>
        </Link>
    </div>
  )
}

export default ErrorPage