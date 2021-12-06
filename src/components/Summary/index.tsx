import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import useTransactions from '../../hooks/useTransactions';
import { formatPrice } from '../../utils/formats';
import { Container } from './styles';

export default function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transactions) => {
			if (transactions.type === 'deposit') {
				acc.deposits += transactions.amount;
				acc.total += transactions.amount;
			} else {
				acc.withdraws += transactions.amount;
				acc.total -= transactions.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		},
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>

				<strong>{formatPrice(summary.deposits)}</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>

				<strong>-{formatPrice(summary.withdraws)}</strong>
			</div>

			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>

				<strong>{formatPrice(summary.total)}</strong>
			</div>
		</Container>
	);
}
