/* eslint-disable react/prop-types */
import Icon from '../Icons/Icon';
import './Card.css';


function Card({ gameEnd , Player ,onPlay , index }) {
    let icon = <Icon/>
    if (Player == 'X'){
        icon = <Icon name = "cross"/>}
        else if (Player == '0'){
            icon = <Icon name = "circle"/>}
            return (
                <div className= "Card" onClick={()=> !gameEnd && Player== ""    && onPlay(index)}>
                {icon}
                </div>
            )
        
    }

export default Card