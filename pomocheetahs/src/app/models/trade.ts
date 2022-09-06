export class Trade {
    instrumentId: string ='';
    quantity: number = -1;
    executionPrice: number =-1;
    clientId: string = "";
    direction: string ="";
    tradeId: string = "";
    order: string ="";
    cashValue: number = -1;
    constructor(
        instrumentId: string,
        quantity: number,
        executionPrice: number,
        clientId: string,
        direction: string,
        tradeId: number,
        order: string,
        cashValue: number
    ){}
}
