import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withRedirect = (Wrapper) => {
   function RedirectComponent(props) {
       if (!props.isAuth) return <Redirect to="/login"/>
       return <Wrapper {...props} />
   }

   return connect(mapStateToProps)(RedirectComponent);
}

export default withRedirect;