import React from 'react';
import "./Cell.css";

const Cell = ( {value ,onClick, className}) => {
    return (
        <div className={`cell-style ${className}` } onClick={onClick} >
        
        {value}
            
        </div>
    );
};

export default Cell;