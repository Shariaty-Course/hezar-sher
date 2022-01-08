import { Helmet } from "react-helmet";
import styles from "./ganjineh.module.css";
import BlocksFade from "src/assets/blocks-fade.png";
import FlourishLeft from "src/assets/flourish-left.png";
import PoetScroller from "src/components/poetScroller";
import usePoets from "src/hooks/usePoets";

function GanjinehPage() {
    const { poets } = usePoets();

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${BlocksFade})` }}
        >
            <Helmet>
                <title>هزار شعر - گنجینه اشعار</title>
            </Helmet>
            <div className={styles.yellowBox}>
                <img src={FlourishLeft} alt="طرح" />
            </div>
            <div className={styles.blueBox} />
            <PoetScroller poets={poets} />
        </div>
    );
}

export default GanjinehPage;
