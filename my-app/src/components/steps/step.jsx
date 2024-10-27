// יקבל אינדקס ופרמטר שלפיו העיצוב יהיה כחול או אפור

import React from 'react'
import { useState, useEffect } from 'react';
import './style.css';

const Step = ({ valueStep, classStep }) => {
    return (
        <div className={`${classStep} step`}>{valueStep}</div>
    )
}

export default Step