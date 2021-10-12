import React from "react";
import classes from "./Logo.module.scss";
import Luvly from "../../../assets/img/Luvly.png";

const Logo = (props) => {
	return (
		<a href="/">
			<img className={classes.logo} src={Luvly} alt="Luvly Home Icon" />
			<span className="sr-only">Go to Home Page</span>
		</a>
	);
};

export default Logo;
