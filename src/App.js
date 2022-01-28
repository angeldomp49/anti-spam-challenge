import {React, StrictMode} from "react";
import { Challenge } from "./components/Challenge";
import { ResponseForm } from "./components/ResponseForm";
import Operation from "./Operation";

export const App = () => {

    let operationToResolve = new Operation();
    let container = document.querySelector('#anti-spam-challenge');
    let successEvent = new Event('challenge_resolved');
    let errorEvent = new Event('challenge_failed');

    const handleSuccess = () => {
        container.dispatchEvent(successEvent);
    };

    const handleError = () => {
        container.dispatchEvent(errorEvent);
    };

    return(
        <StrictMode>
            <Challenge text={operationToResolve.text} />
            <ResponseForm 
                rightResponse={operationToResolve.result}
                onSuccess={handleSuccess}
                onError={handleError}
                />
        </StrictMode>
    );
};

export default App;