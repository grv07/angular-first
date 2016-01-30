angular.module('finance', [])
.factory('currencyConverter', ['$http', function($http){
	    var YAHOO_FINANCE_URL_PATTERN = '//query.yahooapis.com/v1/public/yql?q=select * from '+
	            'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
	        'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';	    
            var currencies = ['USD','EUR','CNY'];
	    var usdToForeignRates = {
			USD:1,
			EUR:2.5,
			CNY:4
								            
	    };
	    var convert = function convertToCurr(amount, inCurr, outCurr){
		return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
		};
	    //var usdToForeignRates = {};
            var refresh = function() {
	    var url = YAHOO_FINANCE_URL_PATTERN.
	               replace('PAIRS', 'USD' + currencies.join('","USD'));
            console.log($http.jsonp(url));
	    return $http.jsonp(url).then(function(response) {
      	    var newUsdToForeignRates = {};
           
	    angular.forEach(response.data.query.results.rate, function(rate) {
	        var currency = rate.id.substring(3,6);
	          newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
	        });
            usdToForeignRates = newUsdToForeignRates;
    });
  };    
refresh();
	    return {
		    currencies: currencies,
		    convert: convert
	    };
}]);
