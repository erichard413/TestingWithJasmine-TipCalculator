describe('testing helpers functions', function(){
it('should return SUM of tip amount', function(){
    allPayments = {
        payment1: {billAmt: '100', tipAmt: '15', tipPercent: 15},
        payment2: {billAmt: '50', tipAmt: '10', tipPercent: 20}
    }
    expect(sumPaymentTotal('tipAmt')).toEqual(25);
    expect(sumPaymentTotal('billAmt')).toEqual(150);
    expect(sumPaymentTotal('tipPercent')).toEqual(35);
})

it('should convert bill & tip amount into percent', function(){
    expect(calculateTipPercent(100, 15)).toEqual(15);
    expect(calculateTipPercent(330, 25)).toEqual(8);
    expect(calculateTipPercent(2424, 19)).toEqual(1);
})

it('should create a new td value', function(){
    //takes tr and value
    value = '100';
    newTr = document.createElement('tr');
    appendTd(newTr, '$' + value);
    table = document.querySelector('#paymentTable')
    table.appendChild(newTr);
    let curTdList = document.querySelectorAll('#paymentTable td');
    expect(curTdList[0].innerText).toEqual('$100');
})

afterAll(function(){
    allPayments = {};
    value = 0;
    newTr = "";
    table = document.querySelector('#paymentTable');
    tr = document.querySelector('#paymentTable tbody tr')
    table.remove(tr);
})

});