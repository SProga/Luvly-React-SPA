import "./App.scss";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Splash from "./components/Header/SplashScreen/Splash";
import Main from "./components/Main/Main";
import Reviews from "./components/Reviews/Reviews";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Description from "./components/Description/Description";
import Subscribe from "./components/Subscribe/Subscribe";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import {
  sendCartData,
  fetchCartData,
} from "./store/Slices/Actions/cart-actions";
import Confirmation from "./components/Confirmation/Confirmation";
import Notification from "./components/UI/Notification/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  const showConfirmation = useSelector(
    (state) => state.ui.showConfirmationPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart)); //less coupling
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      {showConfirmation && isLoggedIn && <Confirmation />}
      <Cart />
      <Login />
      <Header />
      <Splash />
      <Main>
        <Reviews />
        <Products />
        <Categories />
        <Description />
        <Subscribe />
        <Companies />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
