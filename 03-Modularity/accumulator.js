console.log('accmulator.js evaluated');
function accmulatorFactory(initialValue){
	var result = initialValue || 0;

	function add(x){
		result += x;
	}

	function subtract(x){
		result -= x;
	}

	function multiply(x){
		result *= x;
	}

	function divide(x){
		result /= x;
	}

	function getResult(){
		return result;
	}

	function reset(){
		result = 0;
	}

	var accmulator = {
		add : add,
		subtract : subtract,
		multiply : multiply,
		divide : divide,
		getResult : getResult,
		reset : reset
	};
	return accmulator;
}

module.exports = accmulatorFactory;

