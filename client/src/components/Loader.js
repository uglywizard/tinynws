import React from "react";

function Loader(Component) {
  return function Loader({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <div>Fetching data, please wait.</div>;
  };
}
export default Loader;
