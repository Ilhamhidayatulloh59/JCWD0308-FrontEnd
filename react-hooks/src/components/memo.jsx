import { useMemo, useState } from "react"
import { useData } from "../context/user"

export const ComponentMemo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    const user = useData()
    console.log("memo", user);

    const isNumberEven = useMemo(() => {
        let i = 0
        // while (i < 1000000000) i++
        return number % 2 == 0
    }, [number])
    
    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>Number : {number}</button>
            <h1>{isNumberEven ? "Even Number" : "Odd Number"}</h1>
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}