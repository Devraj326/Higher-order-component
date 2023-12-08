import React from "react";
import { useState } from "react";

const Common = (props) => {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div>
            {props.render(count, handleCount)}
        </div>

    )
}

export default Common