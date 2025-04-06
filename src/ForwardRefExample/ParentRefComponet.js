import React, { useRef } from 'react'
import ForwardRefComponent from './ForwardRefComponent';

const ParentRefComponent = () => {
    const inputRef = useRef(null);

    const focustInput = () =>{
        inputRef.current.focus();
    };
    const blurInput = () =>{
        inputRef.current.blur();
    };
    const clearInput = () =>{
        inputRef.current.value = '';
    };
    
  return (
    <div>
        <ForwardRefComponent ref={inputRef} />
        <button onClick={focustInput}>Focus Input</button>
        <button onClick={blurInput}>Blur Input</button>
    </div>
  )
}

export default ParentRefComponent;
