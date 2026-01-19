// if else
function calculatePrice(total, customerType) {
	if (customerType === 'standard') {
		return total;
	} else if (customerType === 'student') {
		return total * 0.85;
	} else if (customerType === 'blackFriday') {
		return total * 0.7;
	} else {
		// fallback
		return total;
	}
}

console.log(calculatePrice(100, 'student')); // 85

// strategy pattern

const priceStrategies = {
	standard: (total) => total,
	student: (total) => total * 0.85,
	blackFriday: (total) => total * 0.7
};

function calculatePrice(total, customerType = 'standard') {
	const strategy = priceStrategies[customerType] ?? priceStrategies.standard;
	return strategy(total);
}

console.log(calculatePrice(100, 'student')); // 85
console.log(calculatePrice(100, 'blackFriday')); // 70
console.log(calculatePrice(100, 'unknown')); // 100 (fallback)

// dynamic strategy

function calculatePriceFromConfig(total, config) {
	const strategy = priceStrategies[config.pricingMode] ?? priceStrategies.standard;
	return strategy(total);
}

console.log(calculatePriceFromConfig(200, { pricingMode: 'student' })); // 170
