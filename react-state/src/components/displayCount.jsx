import { useSelector } from 'react-redux'

export const DisplayCounter = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <h2>
              Display Counter :  { count }
            </h2>
        </div>
    )
}
