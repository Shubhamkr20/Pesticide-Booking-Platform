import "./card.css";
import React from 'react';


function Card(props) {
    return (
        

        <div className='s-box'>
            <div className='s-b-img'>
              
                <img src={props.props.img} alt={props.props.title}/>
            </div>
            <div className="s-b-title">
                <h2>{props.props.title}</h2>
                <small>{props.props.motto}</small>

            </div>
            <div className='s-b-text'>
                <p>{props.props.desc}
                </p>
            </div>
          
            </div>
      )
    }


export default Card
