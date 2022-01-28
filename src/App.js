import {React, StrictMode, useState} from "react";
import { Challenge } from "./components/Challenge";
import { ResponseForm } from "./components/ResponseForm";
import Operation from "./Operation";

export const App = () => {

    let [ componentUpdates, setComponentUpdates ] = useState(0);

    let operationToResolve = new Operation();
    let container = document.querySelector('#anti-spam-challenge');
    let successEvent = new Event('challenge_resolved');
    let errorEvent = new Event('challenge_failed');

    if(componentUpdates === 0){
        const bgImageUrl = getCurrentDir() +'/' + 'the-background-292720_1280.png';
        const bgImageValue = 'url("'+ bgImageUrl +'")' ;

        const saveDir = document.createElement('input');
        saveDir.id = 'anti-spam-challenge-save-dir';
        saveDir.setAttribute('type', 'hidden');
        saveDir.value = bgImageValue;
        document.body.appendChild(saveDir);
    }

    const handleSuccess = () => {
        container.dispatchEvent(successEvent);
    };

    const handleError = () => {
        container.dispatchEvent(errorEvent);
        setComponentUpdates(componentUpdates + 1);
    };

    return(
        <StrictMode>
            <Challenge 
                text={operationToResolve.text} />
            <ResponseForm 
                rightResponse={operationToResolve.result}
                onSuccess={handleSuccess}
                onError={handleError}
                />
        </StrictMode>
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

export default App;