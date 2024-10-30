import React from 'react';
import "./Popup.css"

const PopUp = ({winnerName, onClick}) => {
    return (
        <div className="Background-Popup">
            <div className="Container-Popup">
                <div className="Noti-winner">
                    Congratulation! The winner is {winnerName}!
                    <div onClick = {onClick} className='style-button-replay'>Replay game</div>
                </div>
             
            </div>
        </div>
    );
};

export default PopUp;