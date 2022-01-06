import styles from "./button.module.css";

function Button(props) {
    const { type, onClick, title } = props;

    return (
        <button className={styles[type]} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;
