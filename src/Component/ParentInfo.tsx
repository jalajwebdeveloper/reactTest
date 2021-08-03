import React,{useState} from 'react'
import { Info } from './Info'


  

export const ParentInfo: React.FC =props => {
    const [hovering, setHovering] = useState(false);
    const [colorState, setColor] = useState(false);
    const mouseOver = () => setHovering( true );
    const mouseOut = () => {setHovering(false ); setColor(false)}
    const mouseClick =() => setColor(true);
    

    return (
        <div>
            <Info  mouseOver={mouseOver} 
           mouseOut={mouseOut}
           hovering={hovering}
           colorState={colorState}
           mouseClick={mouseClick}
             />
        </div>
    )
}
