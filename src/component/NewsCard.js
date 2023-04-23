import React from 'react';
import {Link} from 'react-router-dom';
const NewsCard = ({title, description, imageUrl, content}) => {

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
         <Link to={{ pathname: '/content', }}  state= { content }>See Details</Link>
        {/* <a href="https://newsapi.org/" className="btn btn-primary">See Details</a> */}
      </div>
    </div>
  );
};

export default NewsCard;
