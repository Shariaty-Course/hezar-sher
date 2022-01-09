import { useState, useCallback, useRef } from "react";

function usePoetsScroller() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const cardsContainer = useRef(null);

    const getWidth = useCallback((elementRefCurrent) => {
        if (elementRefCurrent !== null) {
            return elementRefCurrent.offsetWidth;
        }

        return 0;
    }, []);

    const onScrollRightClick = useCallback(() => {
        setScrollPosition(
            (previousScrollPosition) =>
                previousScrollPosition - window.innerWidth / 2
        );
    }, []);

    const onScrollLeftClick = useCallback(() => {
        setScrollPosition(
            (previousScrollPosition) =>
                previousScrollPosition + window.innerWidth / 2
        );
    }, []);

    return {
        scrollPosition,
        cardsContainer,
        getWidth,
        onScrollRightClick,
        onScrollLeftClick,
    };
}

export default usePoetsScroller;
