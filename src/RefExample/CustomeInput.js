import React, { forwardRef } from 'react';

const CustomeInput = forwardRef((ref,props) => {
  return <input type='text' ref={ref} placeholder='enter your text' />
});

export default CustomeInput;
