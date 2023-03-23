import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function useAppDirection(navDown, navUp, directionValueDown, directionValueUp) {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
        function handleNavigation(e) {
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
        window.addEventListener("wheel", handleNavigation);

        return () => window.removeEventListener("wheel", handleNavigation);
    }, [pathname]);




    return { location, isUp }
}

export default useAppDirection