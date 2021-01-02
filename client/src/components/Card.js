import React from "react";
import Moment from "react-moment";

const Card = ({ item, children }) => {
  if (!item) return <p>No object returned, sorry.</p>;
  return (
    <div className="container-card">
      <div>
        <h4 name="item-name">{item.name}</h4>
      </div>
      <div>
        <p name="next-approach-date">
          <b>Next approach date: </b>{" "}
          <Moment format='Do MMMM YYYY (HH:mm)'>
            {item.close_approach_date}
          </Moment>
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
