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

        return () => {
            challengeScreen.clear();
        };
    });

    let bgImageValue = document.querySelector('#anti-spam-challenge-save-dir').value;
    let bg = { backgroundImage: bgImageValue };
    
    return(
        <canvas 
            id='challenge-box_546534656' 
            style={bg}
            className='challenge-box active'></canvas>
    );
};

export default Challenge;