import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export default function useTransactions() {
	return useContext(TransactionsContext);
}
