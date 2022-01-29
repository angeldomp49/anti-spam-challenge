import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Id from "../randomKey/Id";

export const PortalFactory = ({targetSelector}) =>{

    let containers = document.querySelectorAll(targetSelector);
    let prefixId = 'anti-spam-challenge-container';

    let portals = containers.map((container) => {
                        container.id = prefixId + Id.generate();
                        return ReactDOM.createPortal(<App containerId={container.id} />, container);
                    });

    return(
        <>
            {portals}
        </>
    );
};

export default PortalFactory;