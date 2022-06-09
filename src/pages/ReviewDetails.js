import React from 'react'
import SiteHeader from "../components/SiteHeader"
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { URL } from '../utility/Constants';

export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch(`${URL}/api/reviews/${id}?populate=*`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <React.Fragment>
      <SiteHeader showFilter={false} />

      <div className="content-area">

        <div className="blog-post-main-image">
          <img className="post-image img-responsive" src={`${URL}${data.attributes.image.data.attributes.url}`} />
        </div>

        <div className="blog-post-content">
          <h1>{data.attributes.title}</h1>

          <div className="entry-meta">
            <span className="date"><i className="fa fa-fw fa-clock-o"></i>{`${new Date(data.attributes.updatedAt)}`}</span>
            <span className="divider">|</span>
            <span className="autor"><i className="fa fa-fw fa-user"></i>{data.attributes.author}</span>
          </div>

          <ReactMarkdown>{data.attributes.body}</ReactMarkdown>

          <div className="post-comments">
            <div className="block-title">
              <h3>Comments (2)</h3>
            </div>

            <div className="media">
              <div className="media-body">
                <div className="media-heading">John Doe<span className="divider">|</span> <span className="light-gray">1 hour ago</span>
                </div>
                <p>Nam pellentesque laoreet augue sed facilisis. Suspendisse nec sollicitudin mauris. Integer fringilla a odio sit amet fermentum. Nunc nibh mauris, pretium eu risus et, finibus facilisis lorem.</p>
              </div>

            </div>

            <div className="media">
              <div className="media-body">
                <div className="media-heading">John Doe<span className="divider">|</span> <span className="light-gray">1 hour ago</span>
                </div>
                <p>Nam pellentesque laoreet augue sed facilisis. Suspendisse nec sollicitudin mauris. Integer fringilla a odio sit amet fermentum. Nunc nibh mauris, pretium eu risus et, finibus facilisis lorem.</p>
              </div>
            </div>
          </div>

          <div className="post-comment-add">
            <div className="block-title">
              <h3>Leave a Comment</h3>
            </div>
            <form className="form-add-comment">
              <div className="form-group form-group-with-icon">
                <i className="fa fa-user"></i>
                <label>Your Name</label>
                <input className="form-control" placeholder="" name="name" />
                <div className="form-control-border"></div>
              </div>
              <div className="form-group form-group-with-icon">
                <i className="fa fa-comment"></i>
                <label>Message</label>
                <textarea className="form-control" placeholder="" name="message"></textarea>
                <div className="form-control-border"></div>
              </div>
              <button className="button" type="submit">Add comment</button>
            </form>
          </div>
        </div>

      </div>


    </React.Fragment>
  )
}
