import { useState, useEffect } from "react";
import axios from "axios";
import { getPoetsFacade } from "src/helpers/poets";

function usePoets() {
    const [poets, setPoets] = useState([]);

    useEffect(() => {
        axios.get("https://ganjgah.ir/api/ganjoor/poets").then(({ data }) => {
            setPoets(getPoetsFacade(data));
        });
    }, []);

    return { poets };
}

export default usePoets;
