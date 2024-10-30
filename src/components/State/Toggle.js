import React, { useState } from 'react';
import "./Toggle.css"

const Toggle = () => {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn(!on);
    }
    return (
        <div>
            <div className={`toggle ${on ? "active": " "}`}>
            <div className={`toggle-spinner ${on ? "active": " "}`} onClick={handleToggle}>

                </div>

            </div>

        </div>
    );
};

export default Toggle;