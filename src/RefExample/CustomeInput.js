import React, { forwardRef } from 'react';

const CustomeInput = forwardRef((props,ref) => {
  return <input type='text' ref={ref} placeholder='enter your text' />
});

export default CustomeInput;
