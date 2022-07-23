import Viewport from "../components/Viewport";
import useFetch from "../hooks/useFetch";
import { URL } from "../utility/Constants";

export default function Dashboard() {
  const { loading, error, data } = useFetch(`${URL}/api/reviews?populate=*`);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return <Viewport data={data} />;
}
