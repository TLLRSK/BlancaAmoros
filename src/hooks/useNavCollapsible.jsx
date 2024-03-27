import { useEffect, useState } from "react";

const useNavCollapsible = (location) => {
    const [showWork, setShowWork] = useState(false)

    const toggleCollapsible = () => {
        return setShowWork(!showWork)
    }

    useEffect(() => {
        setShowWork ? setShowWork(false) : null;
    }, [location])

    return {showWork, toggleCollapsible}
}

export default useNavCollapsible;