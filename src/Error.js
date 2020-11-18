import React from 'react';

const Error = (props) => {
    return props.err.map(item => <span className="text-danger"> {item}</span>)
}
export default Error