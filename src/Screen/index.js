import randomItem from "random-item";

class Screen{

    canvasSelector = null;
    canvasObject = null;
    fontFamily = null;
    fontSize = null;
    text = null;
    x = 200;
    y = 50;

    fontSizes = [
        '30px',
        '40px',
        '50px',
    ];

    getCanvas(canvasSelector){
        this.canvasSelector = canvasSelector;
        return this;
    }

    getCanvasObject( canvasObject ){
        this.canvasObject = canvasObject;
        return this;
    }

    setFontFamily(fontFamily){
        this.fontFamily = fontFamily;
        return this;
    }

    setFontSize(fontSize){
        this.fontSize = fontSize;
        return this;
    }

    setRandomStyle(){
        this.setFontFamily('sans-serif');
        this.setFontSize(randomItem(this.fontSizes));
        return this;
    }

    setText(text){
        this.text = text;
        return this;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
        return this;
    }
    
    print(){

        let canvasElement = this.buildCanvasElement();
        let canvasHandler = canvasElement.getContext('2d');
        
        canvasHandler.font = this.fontSize + ' ' + this.fontFamily;
        canvasHandler.textAlign = "center";
        canvasHandler.fillText(this.text, canvasElement.width/2, canvasElement.height/2);
    }

    clear(){
        let canvasElement = this.buildCanvasElement();
        let canvasHandler = canvasElement.getContext('2d');

        canvasHandler.clearRect(0, 0, canvasElement.width, canvasElement.height);
    }

    buildCanvasElement(){

        let canvasElement = null;

        if(this.canvasObject !== null){
            canvasElement = this.canvasObject;
        }
        else{
            canvasElement = document.getElementById(this.canvasSelector);
        }

        return canvasElement;
    }

};

export default Screen;