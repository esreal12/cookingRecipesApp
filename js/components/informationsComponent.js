'use strict';

class InformationsComponent{
    constructor(pMain, pUIManager){
        this.main = pMain;
        this.uiManager = pUIManager; //Main component

        this.container = document.createElement('section');
        this.container.id = 'informationsContainer';
        this.container.classList.add('col-md-9', 'bg-light');

        this.main.append(this.container);
    };

    showInformation(recipe){
        this.container.innerHTML = '';
        new InformationComponent(
            recipe,
            this.main,
            this.uiManager
        );
    };
}