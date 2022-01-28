import react, { useEffect } from 'react';
import Screen from '../../Screen';
import './index.css';

export const Challenge = ({text}) => {

    useEffect(() => {
        let challengeScreen = new Screen();
        challengeScreen.getCanvas('#challenge-box_546534656')
                        .setRandomStyle()
                        .setText(text)
                        .print();
    });

    const bgImageUrl = getCurrentDir() +'/' + 'the-background-292720_1280.png';
    const bgImageValue = 'url('+ bgImageUrl +')';
    
    return(
        <canvas 
            id='challenge-box_546534656' 
            style={{ backgroundImage: bgImageValue }} 
            className='challenge-box active'></canvas>
    );
};

const getCurrentDir = () => {
    let pathParts = document
                    .currentScript
                    .src
                    .split('/');

    pathParts.pop();
    let currentDir = pathParts.join('/');

    return currentDir;
};

export default Challenge;