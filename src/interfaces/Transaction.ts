export interface Transaction {
	id: number;
	title: string;
	type: 'deposit' | 'withdraw';
	category: string;
	amount: number;
	createdAt: Date;
}
