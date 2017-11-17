const convertCurrency = amount => {
	const converted = {
		USD: amount/103.5,
		EUR: amount/115.76,
		GBP: amount/132.34,
		USH: amount*20
	}

	return converted;
}

const { USD, EUR, GBP, USH } = convertCurrency(1500);
console.log(USD, EUR, GBP, USH)