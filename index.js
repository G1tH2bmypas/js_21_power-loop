function power(number, pow) {
	let result = 1;

	for (let i = 1; i <= pow; i++){
		result *= number;
	}
	
	return result;
}

module.exports = power;
