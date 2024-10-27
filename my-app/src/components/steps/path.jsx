// יקבל "צעד"
// ירוץ בלולאה מאחד עד מספר כלשהו
// ירנדר כל פעם צעד אחד עם פרופ של עיצוב לפי הצעד

import React from 'react'
import Step from './step'
import './style.css';
import { useState, useEffect } from 'react';

const Path = ({ step, totalSteps }) => {
    const arrPath = Array.from({ length: totalSteps }, (_, i) => i + 1);

    useEffect(() => {
        // console.log("Updated step in path:", step);

    }, [step]);

    return (
        <div className='container'>
            {arrPath.map((item) => {
                // const valueStep = item > step ? item : 'v'
                const classStep = item > step ? 'next' : 'prev'
                return <Step key={item} valueStep={item} classStep={classStep}></Step>
            })}

        </div>
    )
}

export default Path