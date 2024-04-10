import { useEffect, useState } from "react";

const useNavCollapsible = (location) => {
    const [showWork, setShowWork] = useState(false)

    const toggleCollapsible = () => {
        return setShowWork(!showWork)
    }
    const closeCollapsible = () => {
        setShowWork(false)
    }

    useEffect(() => {
        setShowWork ? setShowWork(false) : null;
    }, [location])

    return {showWork, toggleCollapsible, closeCollapsible}
}

export default useNavCollapsible;