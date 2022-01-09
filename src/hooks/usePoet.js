import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { makeCouplets } from "src/helpers/verses";

function usePoet(id) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [couplets, setCouplets] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [refreshButtonTransform, setRefreshButtonTransform] = useState(0);

    useEffect(() => {
        axios
            .get(`https://ganjgah.ir/api/ganjoor/poet/${id}`)
            .then(({ data }) => {
                const {
                    poet: { nickname, description, imageUrl },
                } = data;

                setName(nickname);
                setBio(description);
                setImage(`https://ganjgah.ir${imageUrl}`);
            });
    }, [id]);

    useEffect(() => {
        if (shouldRefresh) {
            axios
                .get(`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${id}`)
                .then(({ data }) => {
                    const { title, verses } = data;
                    setTitle(title);
                    setCouplets(makeCouplets(verses));
                    setShouldRefresh(false);
                });
        }
    }, [id, shouldRefresh]);

    const refresh = useCallback(() => {
        setRefreshButtonTransform((prevState) => prevState + 180);
        setCouplets([]);
        setTitle("");
        setShouldRefresh(true);
    }, []);

    return {
        name,
        bio,
        image,
        title,
        couplets,
        refresh,
        refreshButtonTransform,
    };
}

export default usePoet;
