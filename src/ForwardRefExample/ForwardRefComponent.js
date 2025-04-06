import react, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useImperativeHandle, useRef } from 'react';

const ForwardRefComponent = forwardRef((props,ref)=>{
   return <input type="text" ref={ref} placeholder='enter your text' />
});

export default ForwardRefComponent;
// ForwardRefComponent.propTypes = {
//     props: PropTypes.string,
//     ref: PropTypes.string
// }