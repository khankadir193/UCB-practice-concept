import React, { useRef } from 'react'

const InputFocus = () => {
    const  inputRef = useRef(null);

    const handleClick = ()=>{
        inputRef.current.focus();
    };

  return (
    <div>
        <input ref={inputRef} type='text' />
        <button onClick={handleClick}>FocusInput</button>
    </div>
  )
}

export default InputFocus;
