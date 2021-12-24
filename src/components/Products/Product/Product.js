import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/Slices/cart-slice";
import classes from "./Product.module.scss";
import Button from "../../UI/Button/Button";
import Like from "../../UI/Like/Like";
import { useSelector } from "react-redux";

const Product = (props) => {
	const { id, price, src, name } = props;
	const [isDisabled, setIsDisabled] = useState(false);

	const [orderAmount, setOrderAmount] = useState(0);
	const item = useSelector((state) =>
		state.cart.items.find((item) => item.id === id)
	);

	const [added, setAdded] = useState(false);
	const dispatch = useDispatch();

	const itemRemoved = useSelector((state) => state.cart.itemRemoved);

	useEffect(() => {
		if (item) {
			setOrderAmount(item.quantity);
		}
		if (!item) {
			setOrderAmount(0);
		}
	}, [item, id, itemRemoved]);

	const addItemHandler = () => {
		setIsDisabled(true);
		setAdded(true);
		dispatch(
			cartActions.addItemToCart({
				id,
				name,
				price,
				src,
			})
		);
		setTimeout(() => {
			setAdded(false);
			setIsDisabled(false);
		}, 300);
	};

	const wishListHandler = (liked) => {
		if (liked) {
			dispatch(
				cartActions.addToWishList({
					wishList: {
						id,
						name,
						price,
						src,
						liked,
					},
				})
			);
		} else {
			dispatch(cartActions.removeFromWishList({ id }));
		}
	};

	return (
		<div className={classes.product}>
			<figure className={classes["product-img-wrapper"]}>
				<img
					className={classes["product-img-wrapper--img"]}
					src={props.src}
					alt={props.name}
				/>
			</figure>
			<div className={classes["product-content"]}>
				<p>{props.name}</p>
				<p className={classes["product-price"]}>${props.price.toFixed(2)}</p>
				<div className={classes["product-content-group"]}>
					{orderAmount < 5 && (
						<Button
							type="button"
							btn="btn--cart"
							action={addItemHandler}
							disabled={isDisabled}>
							{isDisabled && "Adding..."}
							{!isDisabled && "Add to Cart"}
						</Button>
					)}
					{orderAmount === 5 && (
						<Button type="button" btn="btn--disabled" disabled={true}>
							Demo Limit
						</Button>
					)}
					<Like wishListHandler={wishListHandler} id={id} />
					{added && (
						<p className={`${added ? classes.added : ""}`}>+1 Added to cart</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Product);
