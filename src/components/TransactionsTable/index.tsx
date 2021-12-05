import useTransactions from '../../hooks/use-transactions';
import { formatDate, formatPrice } from '../../utils/formats';
import { Container } from './styles';

export default function TransactionsTable() {
	const transactions = useTransactions();

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map(({ id, title, amount, type, category, createdAt }) => (
						<tr key={id}>
							<td>{title}</td>
							<td className={type}>{formatPrice(amount)}</td>
							<td>{category}</td>
							<td>{formatDate(createdAt)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
