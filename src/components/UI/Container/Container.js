import React from "react";

const Container = (props) => {
  const style = {
    display: "flex",
    maxWidth: "144rem",
    margin: "0 auto",
    border: "1px solid red",
  };

  return <div className={style}>{props.children}</div>;
};

export default Container;
