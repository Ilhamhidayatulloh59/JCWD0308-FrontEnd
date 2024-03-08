export const LocalStorage = () => {
    const onSet = () => {
        localStorage.setItem("tes", "Hello world")
    }

    const onRemove = () => {
        localStorage.removeItem("tes")
    }

    const item = localStorage.getItem("tes")

    return (
        <div>
            <button onClick={onSet}>Set Item</button>
            <h1>{item}</h1>
            <button onClick={onRemove}>Remove Item</button>
        </div>
    )
}
