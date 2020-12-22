import React from "react";

function Loader(Component) {
  return function Loader({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <span>Fetching...</span>;
  };
}
export default Loader;
