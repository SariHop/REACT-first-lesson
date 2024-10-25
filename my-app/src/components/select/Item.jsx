import React from "react";

const Item = ({ item, set_state }) => {
    return <div style={{ }}>
        {item}
        <button onClick={() => { set_state(item) }}>select</button>
    </div>;
};

export default Item;
