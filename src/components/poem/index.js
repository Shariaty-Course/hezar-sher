import styles from "./poem.module.css";
import Loading from "src/components/loading";

function Poem(props) {
    const { title, couplets } = props;

    return (
        <div className={styles.poemContainer}>
            {title && couplets ? (
                <>
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
                    </div>{" "}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Poem;
