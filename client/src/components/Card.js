import React from "react";
import Moment from "react-moment";

const Card = ({ item, children }) => {
  if (!item) return <p>No object returned, sorry.</p>;
  return (
    <div>
      <div>
        <h1>{item.name}</h1>
      </div>
      <div>
        <p>
          Next approach date:{" "}
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
