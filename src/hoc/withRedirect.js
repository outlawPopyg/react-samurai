import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

// wrapper - то, что нужно обернуть
// to - url куда редиректнуть
// callback - колбэк дающий понять по какому параметру редиректить

export const withRedirect = (Wrapper, to, callback) => {
    function withRedirectComponent(props) {
        const res = callback(props);
        if (res) return <Redirect to={`/${to}`} />;
        return <Wrapper { ...props } />;
    }

    return connect(mapStateToProps)(withRedirectComponent);
}

