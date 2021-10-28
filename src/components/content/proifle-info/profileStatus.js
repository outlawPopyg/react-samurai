import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = ({ status, setUserStatusThunk }) => {

    const [ editMode, setEditMode ] = useState(false);
    const [ stateStatus, setStateStatus ] = useState(status);

    useEffect(() => setStateStatus(status), [ status ]);

    return  (
        <>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={ () => setEditMode(true) }>{status || "no"}</span>
                </div>
            }

            {
                editMode &&
                <div>
                    <input
                        autoFocus
                        onBlur={ (event) => {
                            setEditMode(false);
                            setUserStatusThunk(stateStatus);
                        }}
                        onChange={ (event) => setStateStatus(event.target.value) }
                        value={ stateStatus }
                        type="text"
                    />
                </div>
            }
        </>
    );
}

export default ProfileStatusWithHooks;