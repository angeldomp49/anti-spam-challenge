import react, { useEffect } from 'react';
import Screen from '../../Screen';
import './index.css';

export const Challenge = ({text}) => {

    let challengeBoxId = 'challenge-box_546534659';

    useEffect(() => {
        let challengeScreen = new Screen();
        challengeScreen.getCanvas('#'+challengeBoxId)
                        .setRandomStyle()
                        .setText(text)
                        .print();

        return () => {
            challengeScreen.clear();
        };
    });

    let bgImageValue = document.querySelector('#anti-spam-challenge-save-dir').value;
    let bg = { backgroundImage: bgImageValue };
    
    return(
        <canvas 
            id={challengeBoxId}
            style={bg}
            className='challenge-box active'></canvas>
    );
};

export default Challenge;