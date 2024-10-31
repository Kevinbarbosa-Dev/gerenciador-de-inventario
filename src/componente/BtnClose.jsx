import React from 'react';
export default function BtnClose({onClick}){
    return(
        <button onClick={onClick} className="btn-close" style={{ cursor: 'pointer' }}>X</button>
    )
}