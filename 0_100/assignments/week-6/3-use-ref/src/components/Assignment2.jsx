import React, {useState, useCallback, useRef} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// let rerenders = 0;
export function Assignment2() {
    const [count, setCount] = useState(0);
    const numberofRerenders = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    // rerenders += 1;
    numberofRerenders.current = numberofRerenders.current + 1;

    return (
        <div>
            {/*<p>This component has rendered {rerenders} times.</p>*/}
            <p>This component has rendered {numberofRerenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};