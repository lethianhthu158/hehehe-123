import React from 'react';
import "./UserTurn.css"

const UserTurn = ({user,className}) => {
    return (
        <div className='container-user-turn'>
            <div className="title-user-turn">Next Turn</div>
            <div className={`status-turn ${className}`}>{user}</div>
        </div>
    );
};

export default UserTurn;