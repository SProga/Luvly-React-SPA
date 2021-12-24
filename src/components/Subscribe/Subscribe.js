import React from "react";
import classes from "./Subscribe.module.scss";
import subscribe from "./img/subscribe.png";
import Button from "../UI/Button/Button";

const Subscribe = () => {
	const formSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className={classes.subscribe}>
			<form action="#" onSubmit={formSubmitHandler} className={classes.form}>
				<h2 className={classes["form-title"]}>Subscribe to Our NewsLetter</h2>
				<div className={classes["form-group"]}>
					<label className={classes["form-label"]} htmlFor="email">
						Email{" "}
					</label>
					<input
						id="email"
						type="text"
						className={classes["form-input"]}
						placeholder="Enter Email"
						maxLength="40"></input>
				</div>
				<div className={classes["form-group"]}>
					<label className={classes["form-label"]} htmlFor="firstName">
						First Name{" "}
					</label>
					<input
						id="firstName"
						type="text"
						className={classes["form-input"]}
						placeholder="Enter FirstName"
						maxLength="22"></input>
				</div>
				<div className={classes["form-group"]}>
					<Button type="submit" btn="btn--subscribe">
						Subscribe
					</Button>
				</div>
				<img className={classes.subscribeImg} src={subscribe} alt="" />
			</form>
		</div>
	);
};

export default Subscribe;
