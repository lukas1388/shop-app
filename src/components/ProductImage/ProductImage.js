import styles from '../Product/Product.module.scss';

const ProductImage = ({ title, name, currentColor }) => {
    return (
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
    );
};

export default ProductImage;