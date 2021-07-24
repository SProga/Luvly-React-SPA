import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import { productCat } from "../../../toFirebase/data";
import CategoryItem from "./CategoryItem/Category-item";

const Category = (props) => {
  const [productType, setProductType] = useState([]);
  const category = props.category ? props.category : "chairs";

  useEffect(() => {
    const prod = productCat.filter((product) => product.category === category);
    setProductType(prod);
  }, [category]);

  const products = productType.map((product) => {
    const { id, name, price, src } = product;
    return (
      <CategoryItem
        key={id}
        id={id}
        name={name}
        price={price}
        src={src}
        product={product}
      />
    );
  });

  return (
    <div className={classes.category}>
      <h1 className={classes.title}>
        Category <span className={classes.cat}>{category}</span>
      </h1>

      <div className={classes.products}>
        {products.length > 0 ? (
          products
        ) : (
          <p className={classes.empty}>No Items in This Category</p>
        )}
      </div>
    </div>
  );
};

export default Category;
