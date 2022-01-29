import React from "react";
import ReactDOM from "react-dom";
import PortalFactory from "./PortalFactory";
import Id from "./randomKey/Id";

let containerSelector = '.anti-spam-challenge';
let mainAppContainer = document.createElement('div');

mainAppContainer.id = 'anti-spam-challenge-main-container' + Id.generate();
document.body.appendChild(mainAppContainer);

ReactDOM.render(
    <PortalFactory targetSelector={containerSelector} />,
    mainAppContainer
);