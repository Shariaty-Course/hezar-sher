import { useNavigate } from "react-router-dom";
import styles from "./faal.module.css";
import HafezBG from "src/assets/bg.png";
import { Helmet } from "react-helmet";
import Faal from "src/components/faal";
import useFaal from "src/hooks/useFaal";
import { routes } from "src/consts/routes";

function FaalPage() {
    const navigate = useNavigate();
    const { poemTitle, couplets, audioURL, interpretation } = useFaal();
    const { home } = routes;

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${HafezBG})` }}
        >
            <Helmet>
                <title>هزار شعر - فال حافظ</title>
            </Helmet>
            <Faal
                title={poemTitle}
                couplets={couplets}
                audioURL={audioURL}
                interpretation={interpretation}
                onBackButtonClick={() => {
                    navigate(home);
                }}
            />
        </div>
    );
}

export default FaalPage;
