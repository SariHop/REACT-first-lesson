import React, { useState } from "react";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

const ItemList = () => {
    const [selected_current_item, set_Selected_current_item] = useState('')
    const item_arr = ['Banna', 'apple', 'grapes', 'cherry', 'watermelon']

    return <div>
        <h4>Select an Item</h4>
        <ul>
            {
                item_arr.map((item, i) => {
                    return <li key={i}><Item item={item} set_state={set_Selected_current_item}></Item></li>
                })
            }
        </ul>

        <SelectedItem item_state={selected_current_item}></SelectedItem>
    </div>
};

export default ItemList;
