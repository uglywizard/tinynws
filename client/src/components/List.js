import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const List = ({ collection }) => {
  if (!collection || collection.length === 0)
    return <p>No objects returned, sorry</p>;
  return (
    <ul>
      {collection.map((item) => {
        return (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/${item.id}/`,
                query: {
                  id: item.id,
                  name: item.name,
                  close_approach_date: item.close_approach_date,
                },
              }}>
              <Card item={item} />
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
