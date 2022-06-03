import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
    return (
        <ul className={styles.choices}>
            {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => {setCurrentSize(size.name)}} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
        </ul>
    );
};

export default OptionSize;