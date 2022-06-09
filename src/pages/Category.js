import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/categories/' + id + '?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      <h2>{ data.attributes.name } Games</h2>

      {data.attributes.reviews.data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>

          <h2>{review.attributes.title}</h2>
          
          <p>{review.attributes.body.substring(0, 200)}...</p>

          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}

    </div>
  )
}