import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };
    
    return (
        <ul className={styles.choices}>
            {colors.map(color => <li key={shortid()}><button type="button" onClick={() => {setCurrentColor(color)}} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
        </ul>
    );
};

export default OptionColor;