import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Photo extends Component {
  render() {
		let { post, comments, i, increment } = this.props;
    return (
      <figure className="grid-figure">
      	<div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
              <img src={post.display_src} className="grid-photo"/>
          </Link>

          <figcaption>
            <p>{post.caption}</p>  
            <div className="control-buttons">
              <button className="likes" onClick={increment.bind(null, i)}>
                &hearts; {post.likes}
              </button>
              <Link to={`/view/${post.code}`} className="button">
                <span className="comment-count">
                  <span className="speech-bubble"></span> {" "}
                  { comments[post.code] ? comments[post.code].length : 0 }
                </span>
              </Link>
            </div>
          </figcaption>
        	</div>
      </figure>
    );
  }
}

export default Photo;
