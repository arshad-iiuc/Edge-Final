import React from 'react'
import bannerImg from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src={bannerImg} 
            className="h-96 w-96 max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn btn-primary mt-10 border-none bg-[#23BE0A] hover:bg-[#23BE0A]">View The List</button>
          </div>
        </div>
      </div> )
}

export default Banner