import styles from "./faal.module.css";
import Button from "src/components/button";
import Loading from "src/components/loading";
import Poem from "src/components/poem";

function Faal(props) {
    const { title, couplets, audioURL, interpretation, onBackButtonClick } =
        props;

    return (
        <div className={styles.container}>
            {!title ? (
                <Loading />
            ) : (
                <>
                    <div className={styles.poemContainer}>
                        <Poem title={title} couplets={couplets} />
                        <audio src={audioURL} controls></audio>
                    </div>
                    <div className={styles.interpretationContainer}>
                        <p className={styles.title}>ای صاحب فال:</p>
                        <p className={styles.interpretation}>
                            {interpretation}
                        </p>
                    </div>
                    <Button
                        title="بازگشت به صفحه اصلی"
                        type="secondary"
                        onClick={onBackButtonClick}
                    />
                </>
            )}
        </div>
    );
}

export default Faal;
