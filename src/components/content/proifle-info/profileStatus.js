import React, {Component} from "react";
import { setStatus, getStatus } from "../../../api/api";

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: ''
    };

    componentDidMount() {
        const { id } = this.props;

        getStatus(id).then(status => this.setState({ status }));
    }

    toggleActivateEditMode = () => {
        this.setState((prevState) => {
            return {
                editMode: !prevState.editMode
            }
        });
    }

    onChangeStatus = ({ target: { value }}) => {
        this.setState({ status: value });
    }

    render() {
        return  (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <span onDoubleClick={ this.toggleActivateEditMode }>{this.state.status}</span>
                        </div>
                }

                {
                    this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onBlur={ (event) => {
                                this.toggleActivateEditMode();
                                setStatus(event.target.value)
                                    .then(res => {
                                        if (res.resultCode === 0) {
                                            this.setState({
                                                status: event.target.value
                                            });
                                        }
                                    });
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

