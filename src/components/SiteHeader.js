import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { URL } from "../utility/Constants";

const SiteHeader = () => {
  const { loading, error, data } = useFetch(`${URL}/api/categories`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Strapi Blogging</h1>
      </Link>

      <nav className="categories">
        <Link to="/dashboard" className="dashboard">
          Dashboard
        </Link>
        <span>Filter reviews by category:</span>

        {data.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;
