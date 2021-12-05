export function formatPrice(value: number, locale = 'pt-BR', currency = 'BRL') {
	return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

export function formatDate(value: Date, locale = 'pt-BR') {
	return new Intl.DateTimeFormat(locale).format(new Date(value));
}
