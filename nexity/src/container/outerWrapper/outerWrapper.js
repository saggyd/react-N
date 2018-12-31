import React from 'react';

const OuterWrapper = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default OuterWrapper;