import { useState, useCallback } from "react";

function usePoetsScroller() {
    const [scrollPosition, setScrollPosition] = useState(0);

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
        onScrollRightClick,
        onScrollLeftClick,
    };
}

export default usePoetsScroller;
