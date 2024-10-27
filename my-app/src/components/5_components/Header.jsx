import React, { useEffect } from "react";

const Header = ({name}) => {
    
    useEffect(()=>{}, [name])
    
    return <header> {name}</header>;
};

export default Header;

