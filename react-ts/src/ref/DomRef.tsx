import { useRef, useEffect } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            Auto input focus here
            <input type='text' ref={inputRef} />
        </div>
    )
}