import styles from '../Product/Product.module.scss';
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import Button from '../Button/Button';

const ProductOptions = ({ sizes, colors, currentSize, currentColor, setCurrentSize, setCurrentColor, action }) => {
    
    return (
        <form onSubmit={action}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

export default ProductOptions;