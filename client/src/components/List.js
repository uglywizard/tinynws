import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const List = ({ collection }) => {
  if (!collection || collection.length === 0)
    return <p>No objects returned, sorry</p>;
  return (
    <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
      {collection.map((item) => {
        return (
          <li
            className={
              item.is_potentially_hazardous
                ? "container-paging-body-if-item-alert"
                : "container-paging-body-item"
            }
            key={item.id}>
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
          </li>
        );
      })}
    </ul>
  );
};

export default List;
