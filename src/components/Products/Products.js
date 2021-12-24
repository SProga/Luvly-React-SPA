import React, { Fragment, useRef, useEffect, useState } from "react";
import Product from "./Product/Product";
import classes from "./Products.module.scss";
import { products } from "../../toFirebase/data";
import { Carousel } from "react-responsive-carousel";
import Responsive from "../Responsive/Responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let mobile;
let firstLoad = true;
const Products = (props) => {
	//scrollto function
	const { scrollTo } = props;
	const [isMobile, setIsMobile] = useState("");

	useEffect(() => {
		if (firstLoad) {
			mobile = Responsive();
			firstLoad = false;
			setIsMobile(mobile);
		} else {
			window.addEventListener("resize", () => {
				mobile = Responsive();
				setIsMobile(mobile);
			});
		}
	}, [isMobile]);

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

				{isMobile && (
					<div className={classes.mobileCarousel}>
						<Carousel
							emulateTouch={true}
							showThumbs={false}
							showIndicators={false}>
							{sets}
						</Carousel>
					</div>
				)}
				{!isMobile && <div className={classes.desktopProducts}>{sets}</div>}
			</div>
		</Fragment>
	);
};

export default React.memo(Products);
