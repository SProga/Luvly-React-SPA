import React, { useState, useEffect } from "react";
import like from "./img/like.svg";
import classes from "./Like.module.scss";
import love from "./img/love.svg";
import { useSelector } from "react-redux";

const Like = ({ wishListHandler, isLiked = false }) => {
	const [liked, setLiked] = useState(isLiked);

	useEffect(() => {
		wishListHandler(liked);
	}, [liked, wishListHandler]);

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
