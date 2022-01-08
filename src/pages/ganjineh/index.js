import styles from "./ganjineh.module.css";
import BlocksFade from "src/assets/blocks-fade.png";
import FlourishLeft from "src/assets/flourish-left.png";

function GanjinehPage() {
    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${BlocksFade})` }}
        >
            <div className={styles.yellowBox}>
                <img src={FlourishLeft} alt="طرح" />
            </div>
            <div className={styles.blueBox} />
        </div>
    );
}

export default GanjinehPage;
