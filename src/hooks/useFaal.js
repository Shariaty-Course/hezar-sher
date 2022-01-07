import { useEffect, useState } from "react";
import axios from "axios";
import { makeCouplets, getInterpretation } from "src/helpers/verses";

function useFaal() {
    const [poemTitle, setPoemTitle] = useState("");
    const [couplets, setCouplets] = useState([]);
    const [audioURL, setAudioURL] = useState("");
    const [interpretation, setInterpretation] = useState("");

    useEffect(() => {
        axios
            .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(({ data }) => {
                const { title, verses, recitations } = data;
                setPoemTitle(title);
                const couplets = makeCouplets(verses);
                setCouplets(couplets);
                setAudioURL(recitations[0].mp3Url);
                setInterpretation(getInterpretation(couplets));
            });
    }, []);

    return { poemTitle, couplets, audioURL, interpretation };
}

export default useFaal;
