import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../interfaces/Transaction';
import axios from '../services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

export default function TransactionsProvider({ children }: { children: ReactNode }) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		axios.get('transactions').then(({ data }) => setTransactions(data.transactions));
	}, []);

	return (
		<TransactionsContext.Provider value={transactions}>{children}</TransactionsContext.Provider>
	);
}
