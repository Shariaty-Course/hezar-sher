import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./poet.module.css";
import usePoet from "src/hooks/usePoet";
import BlocksFade2 from "src/assets/blocks-fade-2.png";
import Flourish from "src/assets/flourish.png";
import Refresh from "src/assets/refresh.png";
import Poem from "src/components/poem";

function PoetPage() {
    const { id } = useParams();
    const {
        name,
        bio,
        image,
        title,
        couplets,
        refresh,
        refreshButtonTransform,
    } = usePoet(id);

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${BlocksFade2})` }}
        >
            <Helmet>
                <title>هزار شعر - {name}</title>
            </Helmet>
            <img className={styles.poetImage} src={Flourish} alt="طرح" />
            <div className={styles.yellowBox}>
                <img className={styles.poetImage} src={image} alt={name} />
                <div className={styles.poemContainer}>
                    <Poem title={title} couplets={couplets} />
                </div>
                <div
                    className={styles.refreshButton}
                    style={{
                        transform: `rotate(${refreshButtonTransform}deg)`,
                    }}
                    onClick={refresh}
                >
                    <img src={Refresh} alt="از نو" />
                </div>
            </div>
            <div className={styles.blueBox}>{bio}</div>
        </div>
    );
}

export default PoetPage;
