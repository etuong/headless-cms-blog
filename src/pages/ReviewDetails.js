import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { URL } from "../utility/Constants";

export default function ReviewDetails() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `${URL}/api/reviews/${id}?populate=*`
  );

  useEffect(() => {
    if (data && data.attributes.comments)
      setComments(data.attributes.comments.data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let handleCommentSubmission = async (e) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const elements = form.elements;
      let res = await fetch(`${URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            author: elements.name.value,
            message: elements.message.value,
            review: id,
          },
        }),
      });

      if (res.status === 200) {
        const postedComment = await res.json();
        setComments([...comments, postedComment.data]);
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content-area">
      <div className="blog-post-main-image">
        <img
          className="post-image img-responsive"
          src={`${data.attributes.image.data.attributes.url}`}
          alt=""
        />
      </div>

      <div className="blog-post-content">
        <h1>{data.attributes.title}</h1>

        <div className="entry-meta">
          <span>
            <i className="fa fa-fw fa-clock"></i>
            {`${new Date(data.attributes.updatedAt)}`}
          </span>
          <span className="divider">|</span>
          <span>
            <i className="fa fa-fw fa-user"></i>
            {data.attributes.author}
          </span>
        </div>

        <div className="entry-meta">
          Rating:{" "}
          <my-rating-component
            maxstars="10"
            rating={data.attributes.rating}
            color="red"
            class="ratings"
          ></my-rating-component>
        </div>

        <ReactMarkdown>{data.attributes.body}</ReactMarkdown>

        <div className="post-comments">
          <div className="block-title">
            <h3>Comments ({comments.length})</h3>
          </div>

          {comments.map((comment, index) => (
            <div key={index} className="media">
              <div className="media-body">
                <div className="media-heading">
                  {comment.attributes.author}
                  <span className="divider">|</span>{" "}
                  <span className="light-gray">{`${new Date(
                    comment.attributes.updatedAt
                  )
                    .toString()
                    .split(" ")
                    .slice(0, 5)
                    .join(" ")}`}</span>
                </div>
                <p>{comment.attributes.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="post-comment-add">
          <div className="block-title">
            <h3>Leave a Comment</h3>
          </div>
          <form className="form-add-comment" onSubmit={handleCommentSubmission}>
            <div className="form-group form-group-with-icon">
              <i className="fa fa-user"></i>
              <input
                className="form-control"
                placeholder="Your Name"
                name="name"
                required
              />
              <div className="form-control-border"></div>
            </div>
            <div className="form-group form-group-with-icon">
              <i className="fa fa-comment"></i>
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <div className="form-control-border"></div>
            </div>
            <button className="button" type="submit">
              Add comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
