export default function Home() {
  return (
    <div className="home">
      <h3>
        This web app works in conjunction with Strapi to create a full stack
        blogging website.{" "}
      </h3>
      <p>
        Strapi is a headless CMS. It is useful to rapidly create artifacts and
        assets in a content registry that can easily be pulled using RESTful API
        or GraphQL.
      </p>
      <p>
        You can create blogging contents on my{" "}
        <a
          href="https://ethan-strapi.herokuapp.com/admin/"
          target="_blank"
          rel="noreferrer"
        >
          Strapi server
        </a>{" "}
        and use my dummy credentials to log in{" "}
      </p>
      <br />
      <pre>Email: email@email.com Password: Password1</pre>
    </div>
  );
}
