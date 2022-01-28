class Operation{

    text = null;
    result = null;

    constructor(){
        let firstNumber = this.createOperator();
        let secondNumber = this.createOperator();

        this.text = firstNumber + ' + ' + secondNumber;
        this.result = firstNumber + secondNumber;
    }

    createOperator(){
        return Math.round( Math.random() * 10 );
    }
}

export default Operation;