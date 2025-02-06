import React, { useRef } from 'react'
import CustomeInput from './CustomeInput';

const ParentComponet = () => {
    const inputRef = useRef();

    const handleFocusInput = () => {
        console.log('inputRef.current',inputRef);
        inputRef.current.focus();
    };

  return (
    <div>
        <CustomeInput ref={inputRef} />
        <button onClick={handleFocusInput}>Focus Parent Input</button> 
    </div>
  )
}

export default ParentComponet;