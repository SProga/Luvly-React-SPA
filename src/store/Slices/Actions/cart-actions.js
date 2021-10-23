import { uiActions } from "../ui-slice";
import { cartActions } from "../cart-slice";

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				""
			);
			if (!response.ok) {
				throw new Error("Opps! a problem occurred fetching the cart");
			}
			const data = await response.json(); //because we stored the values using put there is no need for data transformation
			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
				})
			);
		} catch (err) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error",
					message: err,
				})
			);
		}
		const timer = setTimeout(() => {
			dispatch(uiActions.resetNotification());
		}, 1000);
		clearTimeout(timer);
	};
};

export const sendCartData = (cart) => {
	let timer = null;
	clearTimeout(timer);
	return async (dispatch) => {
		const notificationMessage = {
			status: "pending...",
			title: "Sending...",
			message: "Sending cart data",
		};
		dispatch(uiActions.showNotification(notificationMessage)); //showNotification is an action Creator.
		const sendRequest = async () => {
			const response = await fetch(
				"",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);
			if (!response.ok) {
				throw new Error("Sending cart data failed");
			}
		};
		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success!",
					message: "updated cart",
				})
			);
			timer = setTimeout(() => {
				dispatch(uiActions.resetNotification());
			}, 2000);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error",
					message: error,
				})
			);
		}
	};
};
