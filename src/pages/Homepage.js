import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const qs = require('qs');
  const query = qs.stringify({
    populate: {
      categories: {
        populate: '*',
      },
    },
  }, {
    encodeValuesOnly: true,
  });

  const { loading, error, data } = useFetch(`http://localhost:1337/api/reviews?populate=*`)

  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>

          <h2>{review.attributes.title}</h2>

          {review.attributes.categories.data.map(c => (
            <small key={c.id}>{c.attributes.name}</small>
          ))}

          <p>{review.attributes.body.substring(0, 200)}...</p>

          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
