import React from "react";
import classes from "./Splash.module.scss";
import Button from "../../UI/Button/Button";
import SplashSofa from "../../../assets/img/furniture--01.png";

const Splash = (props) => {
	// run this function from an event handler or an effect to execute scroll

	const scrollHandler = () => {
		props.productSection.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={classes.splash}>
			<h1 className={`${classes.title} ${classes["mt-m"]}`}>
				<span className={classes.fancy}>E</span>nhance your room with our{" "}
				<span className={classes.new}> new </span>
				living room sets
			</h1>
			<div className={classes.wrapper}>
				<img src={SplashSofa} alt="our new sofa set" />
			</div>
			<Button type="button" btn="btn--browse" action={scrollHandler}>
				Browse Sets
			</Button>
		</div>
	);
};

export default Splash;
