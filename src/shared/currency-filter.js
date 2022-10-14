export default function(amount, currencySymbol){
	return `${currencySymbol}${amount.toFixed(2)}`
}