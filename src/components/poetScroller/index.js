import styles from "./poetScroller.module.css";
import Card from "src/components/card";
import { routes } from "src/consts/routes";
import Button from "src/components/button";
import usePoetsScroller from "src/hooks/usePoetsScroller";
import Loading from "src/components/loading";

function PoetScroller(props) {
    const { scrollPosition, onScrollRightClick, onScrollLeftClick } =
        usePoetsScroller();

    const { poets } = props;
    const { shaer } = routes;

    return (
        <div className={styles.container}>
            {poets.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <div
                        className={styles.cards}
                        style={{ transform: `translateX(${scrollPosition}px)` }}
                    >
                        {poets.map((poet) => {
                            const { id, name, image } = poet;
                            return (
                                <Card
                                    key={`poet-${name}`}
                                    title={name}
                                    imageURL={image}
                                    link={`${shaer}/${id}`}
                                />
                            );
                        })}
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            type="round"
                            title="<"
                            onClick={onScrollLeftClick}
                            disabled={!scrollPosition}
                        />
                        <Button
                            type="round"
                            title=">"
                            onClick={onScrollRightClick}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default PoetScroller;
