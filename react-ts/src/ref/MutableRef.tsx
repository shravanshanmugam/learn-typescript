import {useState, useRef, useEffect} from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }

    function updateTimer() {
        setTimer(prevState => prevState + 1)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(updateTimer, 1000)
        return stopTimer
    }, [])

    return (
        <div className="timer">
            Timer: {timer} s
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}