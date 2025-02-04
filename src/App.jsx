import { useState, useEffect } from 'react'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // console.log('API Response:', data)
        setPosts(data.slice(0, data.length))
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 t"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 ">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
