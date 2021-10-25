import React from "react";
import {Field, reduxForm} from "redux-form";
import {withInput} from "../inputs/textarea";
import {maxLengthCreator, requiredField } from "../../validators/validator";
import {login} from "../../state/auth-reducer";
import { connect } from "react-redux";
import { withRedirect } from "../../hoc/withRedirect";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <div>
                    <Field
                        placeholder={"Login"}
                        name={"email"}
                        component={ withInput }
                        validate={[ requiredField, maxLength30]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        component={ withInput }
                        validate={[ requiredField, maxLength30]}
                    />
                </div>
                <div>
                    <Field
                        component={ withInput }
                        type={"checkbox"}
                        name={"rememberMe"}
                    /> remember me
                </div>
                { error && <div className={"form-summary-error"}>{ error }</div>}
                <div>
                    <button>Sign in</button>
                </div>

            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    // unique name for form
    form: 'login'
})(LoginForm);

const Login = ({ login }) => {

    const onSubmit = (formData) => {
        login(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </>
    )
}
const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(withRedirect(
    Login, "profile", (props) => props.isAuth));