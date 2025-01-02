import React, { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev+1);
        setCount(prev => prev+1);
        setCount(prev => prev+1);
    }
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">-</button>
                <span>{count}</span>
                <button type="button" onClick={increment} className="btn btn-primary">+</button>
            </div>
        </div>
    )
}

export default Count
