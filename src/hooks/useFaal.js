import { useEffect, useState } from "react";
import axios from "axios";
import { makeCouplets } from "src/helpers/verses";

function useFaal() {
    const [poemTitle, setPoemTitle] = useState("");
    const [couplets, setCouplets] = useState([]);
    const [audioURL, setAudioURL] = useState("");
    const [interpretation, setInterpretation] = useState("");

    useEffect(() => {
        if (poemTitle) {
            return;
        }

        axios
            .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(({ data }) => {
                const { title, verses, recitations } = data;
                setPoemTitle(title);
                setCouplets(makeCouplets(verses));
                setAudioURL(recitations[0].mp3Url);

                // Set interpretation here
                setInterpretation("");
            });
    });

    return { poemTitle, couplets, audioURL, interpretation };
}

export default useFaal;
