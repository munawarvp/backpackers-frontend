import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './cards.css'


function Card(props) {
    console.log('my', props);
  return (
    <div className="CompactCard"
        style={
            {background : props.color.backGround,boxShadow:props.color.boxShadow}
        }
    >
        <div className="radialBar">
            <CircularProgressbar value={props.barValue} text={`${props.barValue}%`} />
        </div>
        <div className="detail">
            <span>{props.value}</span>
            <h2 className='font-extrabold text-2xl'>{props.title}</h2>
        </div>
    </div>
  )
}

export default Card