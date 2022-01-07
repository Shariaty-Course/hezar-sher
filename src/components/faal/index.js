import styles from "./faal.module.css";
import Button from "src/components/button";
import Loading from "src/components/loading";

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
                        <p className={styles.title}>{title}:</p>
                        <div className={styles.poem}>
                            {couplets.map((couplet, coupletIndex) => {
                                return (
                                    <div
                                        key={`couplet-${coupletIndex}`}
                                        className={styles.couplet}
                                    >
                                        {couplet.map((verse, verseIndex) => {
                                            return (
                                                <div
                                                    key={`verse-${coupletIndex}-${verseIndex}`}
                                                    className={styles.verse}
                                                >
                                                    {verse}
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
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
