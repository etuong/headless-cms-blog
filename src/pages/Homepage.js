import React from 'react'
import SiteHeader from "../components/SiteHeader"
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { URL } from '../utility/Constants';
import { getDateFromISO } from '../utility/DateTimeHelper'

export default function Homepage() {

  const { loading, error, data } = useFetch(`${URL}/api/reviews?populate=*`)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  return (
    <React.Fragment>
      <SiteHeader showFilter={true} />
      <div className="container">
        {data.map(review => (
          <div key={review.id} className="card">
            <div className="card__header">
              <img src={`${URL}${review.attributes.image.data.attributes.url}`} alt="card__image" className="card__image" width="600" />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">Technology</span>
              <h4>{review.attributes.title}</h4>
              <p>{review.attributes.body.substring(0, 200)}...</p>
              <Link to={`/details/${review.id}`}>Read more</Link>
            </div>
            <div className="card__footer">
              <div className="user">
                <img src={`${URL}${review.attributes.avatar.data.attributes.url}`} alt="user__image" className="user__image" />
                <div className="user__info">
                  <h5>{review.attributes.author}</h5>
                  <small>{getDateFromISO(review.attributes.updatedAt)}</small>
                </div>
              </div>
            </div>

          </div>))}

          {data.map(review => (
          <div key={review.id} className="card">
            <div className="card__header">
              <img src={`${URL}${review.attributes.image.data.attributes.url}`} alt="card__image" className="card__image" width="600" />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">Technology</span>
              <h4>{review.attributes.title}</h4>
              <p>{review.attributes.body.substring(0, 200)}...</p>
              <Link to={`/details/${review.id}`}>Read more</Link>
            </div>
            <div className="card__footer">
              <div className="user">
                <img src={`${URL}${review.attributes.avatar.data.attributes.url}`} alt="user__image" className="user__image" />
                <div className="user__info">
                  <h5>{review.attributes.author}</h5>
                  <small>{getDateFromISO(review.attributes.updatedAt)}</small>
                </div>
              </div>
            </div>

          </div>))}
      </div>
    </React.Fragment>
  )
}
