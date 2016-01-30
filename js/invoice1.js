angular.module('invoice',['finance'])
.controller('InvoiceController',['currencyConverter', function(currencyConverter){
	this.qt1 = 1;
	this.qt2 = 2.5;
	this.inCurr = 'EUR';
	this.currencies = currencyConverter.currencies;
        //console.log(currencyConverter.currencies)
	//All commented code now transfer to services > finance.js 
	//this.currencies = ['USD','EUR','CNY'];
	//this.usdToForeignRates = {
	//	USD:1,
	//	EUR:2.5,
	//	CNY:4
	//};
	this.total = function total(outCurr){		
	  return currencyConverter.convert(this.qt1*this.qt2, this.inCurr, outCurr);
	};	
	//this.convert = function convertToCurr(amount, inCurr, outCurr){	
	//  return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
	//};
	this.pay = function pay(){
	  window.alert('Okay !');
	};
}]);
