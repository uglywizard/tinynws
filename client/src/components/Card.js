import React from "react";
import Moment from "react-moment";

const Card = ({ item, children }) => {
  if (!item) return <p>No object returned, sorry.</p>;
  return (
    <div className='container'>
      <div>
        <h4>{item.name}</h4>
      </div>
      <div>
        <p>
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
