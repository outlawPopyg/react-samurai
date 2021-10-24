import React from "react";
import {Field, reduxForm} from "redux-form";
import {withInput} from "../inputs/textarea";
import {maxLengthCreator, requiredField } from "../../validators/validator";

const maxLength10 = maxLengthCreator(10);

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field
                    placeholder={"Login"}
                    name={"login"}
                    component={ withInput }
                    validate={[ requiredField, maxLength10]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    component={ withInput }
                    validate={[ requiredField, maxLength10]}
                />
            </div>
            <div>
                <Field
                    component={ withInput }
                    type={"checkbox"}
                    name={"rememberMe"}
                /> remember me
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