import {useEffect, useState} from "react";

const useDebounced = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(undefined);
    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(id);
        }
    })
    return debouncedValue;
}

export default useDebounced;