import React from "react";
import PropTypes from "prop-types";

const Cards = ({ imageUrl, title, description, url }) => {
  // Truncate the description and add ellipsis if needed
  let truncatedDescription;

  if(description)
  {
   truncatedDescription = description.length > 50 ? `${description.substring(0, 50)}...` : description;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      {imageUrl && (
        <img
          className="card-img-top"
          src={imageUrl}
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <div className="card-body" style={{ minHeight: "150px" }}>
        {title && <h5 className="card-title">{title}</h5>}
        <p className="card-text">{truncatedDescription}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

Cards.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string, // title is optional
  description: PropTypes.string,
  url: PropTypes.string // url is optional
};

export default Cards;
