import React from "react";
const BookDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Book Title- PYTHON : {id}</span>
          <p> Author Name : Priota Roy</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
