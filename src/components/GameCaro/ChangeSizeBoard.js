import React from 'react';
import "./ChangeSizeBoard.css"

const ChangeSizeBoard = ({ sizeBoard }) => {
    const handleSubmitChangeSize = (event) => {
        event.preventDefault();
        const valueNewSize = event.target.value;
        sizeBoard(valueNewSize);

    }
    return (
        <div className='style-form-resize '>

            <label htmlFor="size" className='style-lable-size'>Resize Board </label>
            <select name="sizeBoard" id="size" className='style-select-size' onChange={handleSubmitChangeSize}>
                <option value="25" className='style-option'>5x5</option>
                <option value="100" className='style-option'>10x10</option>
                <option value="400" className='style-option'>20x20</option>
                <option value="1600" className='style-option'>40x40</option>
            </select>

        </div>
    );
};

export default ChangeSizeBoard;