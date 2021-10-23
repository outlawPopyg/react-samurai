import React, {Component} from "react";

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    toggleActivateEditMode = () => {
        this.setState((prevState) => {
            return {
                editMode: !prevState.editMode
            }
        });
    }


    onChangeStatus = ({ target: { value }}) => {
        this.setState({ status: value })
    }

    render() {
        return  (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <span onDoubleClick={ this.toggleActivateEditMode }>{this.state.status || "no"}</span>
                        </div>
                }

                {
                    this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onBlur={ (event) => {
                                this.toggleActivateEditMode();
                                this.props.setUserStatusThunk(this.state.status);
                            }}
                            onChange={ this.onChangeStatus }
                            value={this.state.status}
                            type="text"
                        />
                    </div>
                }
            </>
        );
    }
}

