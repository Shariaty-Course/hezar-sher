import styles from "./card.module.css";

function Card(props) {
    const { onClick, imageURL, title } = props;

    return (
        <div onClick={onClick} className={styles.container}>
            <img src={imageURL} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default Card;
