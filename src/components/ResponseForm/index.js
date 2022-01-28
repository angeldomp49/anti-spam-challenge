import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export const ResponseForm = ({rightResponse, onSuccess, onError}) => {

    let inputId = "challenge-user-response1";

    const validate = () => {
        let success = checkUserResponse( rightResponse );
    
        if(success){
            onSuccess();
        }
        else{
            onError();
        }
    }
    
    const checkUserResponse = (rightResponse) => {
        let inputResponse = document.getElementById(inputId);
        let inputResponseInt = parseInt(inputResponse.value);
        return (inputResponseInt == rightResponse);
    };

    return (
        <div className="anti-spam-challenge-form">
            <input type="number" id={inputId} placeholder="resultado" />
            <button type="button" className="anti-span-challenge-button" onClick={ validate } >
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
};

export default ResponseForm;