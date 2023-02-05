import React, { useContext } from 'react';
// import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartimg from '@icons/bt_add_to_cart.svg';
import addedToCartimg from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product?.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
          {state?.cart?.includes(product) ? (
            <Image width={50} height={50} className={`${styles.disabled} ${styles['add-to-cart-btn']}`} src={addedToCartimg} alt="added to cart" />
          ) : (
            <Image width={50} height={50} className={`${styles.pointer} ${styles['add-to-cart-btn']}`} src={addToCartimg} alt="add to cart" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
