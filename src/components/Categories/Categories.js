import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Categories.module.scss";
import { CategoryData } from "../../toFirebase/data";
import Category from "./Category/Category";

//version 2
const Categories = (props) => {
	const [category, setCategory] = useState(null);

	const showCategory = (cat) => {
		setCategory(cat);
	};

	const allCategories = CategoryData.map((cat) => {
		const { name, id, src } = cat;
		return (
			<div
				className={classes.category}
				key={id}
				onClick={showCategory.bind(null, cat.category)}>
				<img className={classes["category-img"]} src={src} alt={name} />
			</div>
		);
	});

	return (
		<section className={classes["categorySection"]}>
			<h2 className={classes.catTitle}>Category</h2>
			<h2 className={classes.title}>
				Choose A <span className={classes.color}>Category</span>
			</h2>
			<div className={classes.categories}>
				<Carousel
					centerSlidePercentage={45}
					centerMode={true}
					emulateTouch={true}
					showThumbs={false}
					showIndicators={true}>
					{allCategories}
				</Carousel>
			</div>

			<div className={classes.desktopCategories}>{allCategories}</div>

			<Category category={category} />
		</section>
	);
};

export default Categories;
