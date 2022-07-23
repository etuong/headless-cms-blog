export default function Home() {
  return (
    <div className="home">
      <p>
        <b>
          This web app works in conjunction with Strapi to create a full stack
          blogging website.
        </b>
      </p>

      <p>
        Strapi is a headless CMS (Content Management System). It is useful to
        rapidly create artifacts and assets in a content registry that can
        easily be pulled using RESTful API or GraphQL.
      </p>

      <p>
        Traditionally, we have CMS like Wordpress that requires a database to
        store content and there's also a presentation layer of template files
        that mix HTML with template tags.
      </p>

      <p>
        In this type of architecture, the frontend and backend are tighly
        coupled. Both the content and how it's presented are part of the same
        code base (aka monolithic architecture).
      </p>

      <p>
        You can create blogging contents on my &nbsp;
        <a
          href="https://ethan-strapi.herokuapp.com/admin/"
          target="_blank"
          rel="noreferrer"
        >
          Strapi server
        </a>{" "}
        &nbsp;and use my dummy credentials to log in
      </p>

      <pre>
        <code>
          Email: email@email.com
          <br />
          Password: Password1
        </code>
      </pre>

      <p>
        To consume data from Strapi and blog here on this client, you'll need to
        create contents in the admin panel under Content Manager.
      </p>
    </div>
  );
}
