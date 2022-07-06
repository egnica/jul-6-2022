

import { useState } from "react";


const ThreeButtons = (props) => {
   const [buttonData, ChangeButtonData] = useState('Select A Button');
   props.onButtonTransfer(buttonData);
    return (
        <div>
            <button onClick = {() => ChangeButtonData( 'Button one was clicked')}>Button 1</button>
            <button onClick = {() => ChangeButtonData('Button two was clicked') }>Button 2</button>
            <button onClick = {() => ChangeButtonData('Button three was clicked')}>Button 3</button>
            
        </div>
    )
}
export default ThreeButtons