import { useEffect } from 'react';
import Screen from '../../Screen';
import './index.css';

export const Challenge = ({text, challengeBoxId}) => {

    useEffect(() => {

        console.log('before getCanvas: ' + challengeBoxId);

        let challengeScreen = new Screen();
        challengeScreen.getCanvas(challengeBoxId)
                        .setRandomStyle()
                        .setText(text)
                        .print();

        return () => {
            challengeScreen.clear();
        };
    });

    let bgImageValue = document.getElementById('anti-spam-challenge-save-dir').value;
    let bg = { backgroundImage: bgImageValue };

    console.log('before return : ' + challengeBoxId);
    
    return(
        <canvas 
            id={challengeBoxId}
            style={bg}
            className='challenge-box active'></canvas>
    );
};

export default Challenge;