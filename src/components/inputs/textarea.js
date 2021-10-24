import React from "react";
import './style.css';

const withInputComponent = (Wrapper) => {
    return ({ input, meta, ...props}) => {
        const { error, touched } = meta;

        const hasError = error && touched;
        return (
            <div className={`form-control ${ hasError ? 'error' : ''}`}>
                <Wrapper { ...input} { ...props } />
                { hasError && <span>{ error }</span> }
            </div>
        );
    }
}

const withTextArea = withInputComponent((props) => <textarea { ... props } />);
const withInput = withInputComponent((props) => <input { ... props } />);

export { withTextArea, withInput };