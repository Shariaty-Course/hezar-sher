import styles from "./button.module.css";

function Button(props) {
    const { type, onClick, title, disabled } = props;

    return (
        <button className={styles[type]} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
}

export default Button;
