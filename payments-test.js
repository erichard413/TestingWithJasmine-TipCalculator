describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

it("Should add a curPayment object to allPayments, update html and reset input values", function() {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
});
it("createCurPayment() will return undefined with negative or empty inputs", function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
    expect()
})
// it("should create a new payment on createCurPayment()", function() {
//     let payment = {
//     billAmt: '100',
//     tipAmt: '20',
//     tipPercent: 20
//     }
//     curPayment = createCurPayment();
//     expect(Object.keys(curPayment).length).toEqual(1);
//     expect(curPayment['payment1'].billAmt).toEqual('100');
//     expect(curPayment['payment1'].tipAmt).toEqual('20');
//     expect(curPayment['payment1'].tipPercent).toEqual(20);
// })
it("should generate new td from value and append to tr on appendTd(tr, value", function(){
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
})
afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innterHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
})

});