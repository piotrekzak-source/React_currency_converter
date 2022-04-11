import { useState, useRef } from 'react'

const Converter = () => {

    const [output, setOutput] = useState("");

    const inputRef = useRef("");


    const inputHandler = () => {
        setOutput(Number(inputRef.current.value) * 2)
    }


    return (
        <>
            <h1>Przelicznik walut</h1>
            <div>

                <input ref={inputRef} onChange={() => inputHandler()} />
                <select>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>AUS</option>
                </select>


            </div>

            <div>

                <p>{output === 0 ? "" : output}</p>
                <select>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>AUS</option>
                </select>


            </div>

        </>

    );
}

export default Converter;