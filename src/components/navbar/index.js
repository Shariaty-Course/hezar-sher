import { Link } from "react-router-dom";
import { routes } from "src/consts/routes";
import styles from "./navbar.module.css";

function Navbar() {
    const { faal, ganjineh, aboutUs } = routes;

    return (
        <ul className={styles.container}>
            <Link to={faal}>فال حافظ</Link>
            <Link to={ganjineh}>گنجینه اشعار</Link>
            <Link to={aboutUs}>درباره ما</Link>
        </ul>
    );
}

export default Navbar;
