import React, { Fragment, useRef, useEffect } from "react";
import Product from "./Product/Product";
import classes from "./Products.module.scss";
import { products } from "../../toFirebase/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Products = (props) => {
	//scrollto function
	const { scrollTo } = props;

	useEffect(() => {
		scrollTo(productsRef);
	}, [scrollTo]);

	const sets = products.map((product) => {
		const { id, name, price, src } = product;
		return <Product key={id} id={id} name={name} price={price} src={src} />;
	});
	const productsRef = useRef();

	return (
		<Fragment>
			<div className={classes.wrapper}>
				<div className={classes.header}>
					<h2 className={classes.title} ref={productsRef}>
						Products
					</h2>
					<h3 className={classes.subtitle}>
						Luvly <span className={classes.top}>Top</span> Picks
					</h3>
				</div>

				<div className={classes.mobileCarousel}>
					<Carousel
						emulateTouch={true}
						showThumbs={false}
						showIndicators={false}>
						{sets}
					</Carousel>
				</div>

				<div className={classes.desktopProducts}>{sets}</div>
			</div>
		</Fragment>
	);
};

export default React.memo(Products);
