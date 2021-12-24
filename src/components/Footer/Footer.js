import React from "react";
import classes from "./Footer.module.scss";
import Logo from "../../assets/img/Luvly.png";

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<a href="/">
				<img className={classes.logo} src={Logo} alt="" />
			</a>
			<nav className={classes.navigation}>
				<a href="/">Home</a>
				<a href="/">Privacy Policy</a>
				<a href="/">About</a>
				<a href="/">Terms</a>
				<a href="/">Socials</a>
				<a href="/">Shop</a>
				<a href="/">Faqs</a>
			</nav>
			<small className={classes.copyright}>
				This website was created and copyrighted &copy; by Luvly all Rights
				Reserved&reg; 2021
			</small>
		</footer>
	);
};

export default Footer;
