import { useEffect, useState } from 'react'
import { useData } from '../context/user'

export const ComponenState = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("John Smith")
    const user = useData()
    console.log("state", user);

    const decrement = () => {
        if (counter == 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1)
        }
    }

    const myFunc = () => {
        console.log("render")
    }

    useEffect(() => {
        document.title = `you click ${counter} times`
        myFunc()
    }, [counter])

    return (
        <>
            <h1>{name}</h1>
            <div>
                <button onClick={() => setName("Budi")} >Budi</button>
            </div>
            <h1>{counter}</h1>
            <div>
                <button onClick={decrement} >Decrement</button>
                <button onClick={() => setCounter(counter + 1)} >Increment</button>
                <button onClick={() => setCounter(0)} >Reset</button>
            </div>
        </>
    )
}