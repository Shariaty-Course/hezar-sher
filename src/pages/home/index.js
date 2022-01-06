import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "src/components/navbar";
import { routes } from "src/consts/routes";
import styles from "./home.module.css";
import logo from "src/assets/logo.png";
import gathering from "src/assets/gathering.png";
import Button from "src/components/button";
import blocks from "src/assets/blocks.png";

function HomePage() {
    const navigate = useNavigate();
    const { faal, ganjineh } = routes;

    return (
        <div className={styles.container}>
            <Helmet>
                <title>هزار شعر</title>
            </Helmet>
            <div>
                <div className={styles.header}>
                    <Link to="/#">
                        <img src={logo} alt="لوگوی هزار شعر" />
                    </Link>
                    <Navbar />
                </div>
                <div className={styles.section}>
                    <img src={gathering} alt="نقاشی" />
                    <div className={styles.description}>
                        <p>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </p>
                        <div>
                            <Button
                                type="primary"
                                title="فال حافظ"
                                onClick={() => {
                                    navigate(faal);
                                }}
                            />
                            <Button
                                type="primary"
                                title="گنجینه اشعار"
                                onClick={() => {
                                    navigate(ganjineh);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.blocks} src={blocks} alt="طرح مشبک" />
        </div>
    );
}

export default HomePage;
