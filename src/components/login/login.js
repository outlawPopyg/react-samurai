import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = ({ handleSubmit }) => {
    console.log("render");
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    // unique name for form
    form: 'login'
})(LoginForm);

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </>
    )
}

export default Login;