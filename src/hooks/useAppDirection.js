import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { isMobile } from 'react-device-detect';

function useAppDirection(navDown, navUp, directionValueDown, directionValueUp) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [isUp, setIsUp] = useState(false);
    // const [startPosition, setStartPosition] = useState(0)
    // const [endPosition, setEndPosition] = useState(0);
    let start = 0;

    useEffect(() => {
        function handleNavigation(e) {
            console.log(e.pageYOffset, e.touches[0].clientY);

            if (e.deltaY > 1) {
                setIsUp(false)
                setTimeout(() => {
                    navigate(navDown, { state: { value: directionValueDown } });
                }, 200)
            } else if (e.deltaY < 1) {
                setIsUp(true)
                setTimeout(() => {
                    navigate(navUp, { state: { value: directionValueUp } });
                }, 200)
            }
        }
        function handleTouchStartNavigation(e) {
            start = e.touches[0].clientY;
        }
        function handleTouchEndNavigation(e) {
            // console.log(endPosition, startPosition, 'end');
            let end = e.changedTouches[0].clientY;
            // setEndPosition(e.changedTouches[0].clientY);
            console.log(start > end + 5, start < end - 5)
            if (start < end + 5) {
                setIsUp(false)
                setTimeout(() => {
                    navigate(navDown, { state: { value: directionValueDown } });
                }, 200)
            } else if (start > end - 5) {
                setIsUp(true)
                setTimeout(() => {
                    navigate(navUp, { state: { value: directionValueUp } });
                }, 200)
            }
        }
        if (!isMobile) {
            window.addEventListener("wheel", handleNavigation);
        } else {
            window.addEventListener("touchstart", handleTouchStartNavigation);
            window.addEventListener("touchend", handleTouchEndNavigation);
        }

        return () => {
            if (!isMobile) {
                window.removeEventListener("wheel", handleNavigation)
            } else {
                window.removeEventListener("touchstart", handleTouchStartNavigation)
                window.removeEventListener("touchend", handleTouchEndNavigation)
            }
        };
    }, [pathname]);




    return { location, isUp }
}

export default useAppDirection