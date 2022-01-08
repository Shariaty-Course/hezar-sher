import { Link } from "react-router-dom";
import styles from "./card.module.css";

function Card(props) {
    const { link, imageURL, title } = props;

    return (
        <Link to={link} target="_blank">
            <div className={styles.container}>
                <img src={imageURL} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default Card;
