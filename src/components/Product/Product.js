import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = ({ name, title, basePrice, colors, sizes }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const found = sizes.find(elem => elem.name === currentSize);
    return basePrice + found.additionalPrice;
  }, [basePrice, currentSize, sizes]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions action={handleSubmit} sizes={sizes} colors={colors} currentSize={currentSize} currentColor={currentColor} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  )
};

export default Product;