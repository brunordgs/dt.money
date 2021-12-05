export function formatPrice(value: number, locale = 'pt-br', currency = 'brl') {
	return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
