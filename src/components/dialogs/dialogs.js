import React from 'react';
import './dialogs.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <>
            <h1>Dialogs</h1>
            <div className="dialogs">
                <div className="dialogs-items">
                    <div className="dialog-item">
                        <NavLink to="/dialogs/1" >Kalim</NavLink>
                    </div>
                    <div className="dialog-item">
                        <NavLink to="/dialogs/2">Mark</NavLink>
                    </div>
                    <div className="dialog-item">
                        <NavLink to="/dialogs/3">Asgat</NavLink>
                    </div>
                    <div className="dialog-item">
                        <NavLink to="/dialogs/4">Shamil</NavLink>
                    </div>
                    <div className="dialog-item">
                        <NavLink to="/dialogs/5">Georgiy</NavLink>
                    </div>

                </div>
                <div className="divider"></div>
                <div className="dialog-messages">
                    <div className="dialog-message">Hello</div>
                    <div className="dialog-message">How are you?</div>
                    <div className="dialog-message">Try to find it</div>
                </div>
            </div>
        </>
    );
}

export default Dialogs;