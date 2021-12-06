import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../interfaces/Transaction';
import axios from '../services/api';

// Omit provided values from interface
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// Pick selected values from provided interface
// type TransactionInput = Pick<Transaction, 'title' | 'category' | 'type' | 'amount'>;

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction(transaction: TransactionInput): Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export default function TransactionsProvider({ children }: { children: ReactNode }) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		axios.get('transactions').then(({ data }) => setTransactions(data.transactions));
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const res = await axios.post('transactions', {
			...transactionInput,
			createdAt: new Date(),
		});
		const { transaction } = res.data;

		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
}
