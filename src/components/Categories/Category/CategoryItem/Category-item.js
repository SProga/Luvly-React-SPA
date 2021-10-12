import React, { useState, useEffect } from "react";
import classes from "./Category-item.module.scss";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/Slices/cart-slice";
import { useSelector } from "react-redux";

const CategoryItem = (props) => {
	const [added, setAdded] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [orderAmount, setOrderAmount] = useState(0);
	const { id, price, name, src } = props;
	const item = useSelector((state) =>
		state.cart.items.find((item) => item.id === id)
	);
	const itemRemoved = useSelector((state) => state.cart.itemRemoved);
	const dispatch = useDispatch();

	useEffect(() => {
		if (item) {
			setOrderAmount(item.quantity);
		}
		if (!item) {
			setOrderAmount(0);
		}
	}, [item, id, itemRemoved]);

	const addToCartHandler = (item) => {
		setIsDisabled(true);
		setAdded(true);
		const { id, price, src, name } = item;

		dispatch(
			cartActions.addItemToCart({
				id,
				price,
				name,
				src,
			})
		);
		setTimeout(() => {
			setAdded(false);
			setIsDisabled(false);
		}, 300);
	};

	return (
		<div className={classes.card} key={id}>
			<figure className={classes["card-wrapper"]}>
				<img className={classes["card-img"]} src={src} alt={name} />
			</figure>
			<div className={classes.group}>
				<h1 className={classes["card-name"]}>{name}</h1>
				<h4 className={classes["card-price"]}>${price.toFixed(2)}</h4>

				{orderAmount < 5 && (
					<Button
						type="button"
						btn="btn--addSmall"
						action={addToCartHandler.bind(null, props.product)}
						timeout="1000"
						disabled={isDisabled}>
						{isDisabled && "Adding..."}
						{!isDisabled && "Add To Cart"}
					</Button>
				)}
				{orderAmount === 5 && (
					<Button type="button" btn="btn--outOfStock" disabled={true}>
						Demo item limit
					</Button>
				)}

				{added && (
					<p className={`${added ? classes.added : ""}`}>+1 Added to cart</p>
				)}
			</div>
		</div>
	);
};

export default CategoryItem;
