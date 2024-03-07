import useCounter from "../hooks/counter"

export const ComponentCounter = () => {
    const [count, increment, decrement] = useCounter(0, 5)
    return (
        <div>
            <button onClick={increment}>increment</button>
            <h1>count : {count}</h1>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
