import { useParams } from 'react-router-dom'
import Dashboard from "../components/Dashboard"
import useFetch from '../hooks/useFetch'
import { URL } from '../utility/Constants';

export default function Category() {
  const qs = require('qs');
  const query = qs.stringify({
    populate: {
      reviews: {
        populate: '*',
      }
    }
  }, {
    encodeValuesOnly: true,
  });

  const { id } = useParams()

  const { loading, error, data } = useFetch(`${URL}/api/categories/${id}?${query}`)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  return <Dashboard data={data.attributes.reviews.data} />
}