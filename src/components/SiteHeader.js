import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SiteHeader = (props) => {

  const { loading, error, data } = useFetch(`http://localhost:1337/api/categories`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="site-header">
      <Link to="/"><h1>Learn Strapi With Ethan</h1></Link>

      {props.showFilter && <nav className="categories">
        <span>Filter reviews by category:</span>

        {data.map(category =>
        (<Link key={category.id} to={`/category/${category.id}`}>
          {category.attributes.name}
        </Link>)
        )}
      </nav>}

    </div>
  )
}

export default SiteHeader;