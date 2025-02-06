import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-500 mt-2">It seems you've lost your way.</p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
