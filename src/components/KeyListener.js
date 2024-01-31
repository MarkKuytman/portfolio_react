import './KeyListener.css';
import React, {useEffect, useRef, useState} from "react";

const AutoFocusInput = ({onInputChange}) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus on the input element after every update
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });

    const handleBlur = (event) => {
        event.preventDefault();
        event.target.focus();
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onInputChange(event.target.value);

        console.log(event.target.value)
        event.target.value = '';
    };

    return (
        <div className='keyListener'>
            <input
                type="text"
                onChange={handleInputChange}
                onBlur={handleBlur}
                ref={inputRef}
            />
        </div>
    );
}

export default AutoFocusInput;