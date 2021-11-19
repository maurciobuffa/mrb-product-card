import React, { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const imageToShow = img || product.img || noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt="Product"
      style={style}
    />
  );
};
