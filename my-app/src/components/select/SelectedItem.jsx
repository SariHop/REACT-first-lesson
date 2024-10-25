import React, { useEffect } from "react";

const SelectedItem = ({ item_state }) => {

    useEffect(() => {
        console.log(item_state)
    }, [item_state])

    return <div> {`Selected: ${item_state}`}</div>;
};

export default SelectedItem;
