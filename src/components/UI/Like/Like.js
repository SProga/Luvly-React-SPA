import React, { useState } from "react";
import like from "./img/like.svg";
import classes from "./Like.module.scss";
import love from "./img/love.svg";

const Like = () => {
  const [liked, setLiked] = useState(false);

  const likedHandler = () => {
    setLiked((like) => !like);
  };

  const src = liked ? love : like;

  return (
    <React.Fragment>
      <button className={classes.like} onClick={likedHandler}>
        <img src={src} alt="like the product" />
      </button>
    </React.Fragment>
  );
};

export default Like;
