import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import useTransactions from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface Props {
	isOpen: boolean;
	onRequestClose(): void;
}

export default function TransactionModal({ isOpen, onRequestClose }: Props) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
	const [category, setCategory] = useState('');

	async function handleCreateNewTransaction(e: FormEvent) {
		e.preventDefault();

		const transaction = {
			title,
			amount,
			type,
			category,
		};

		await createTransaction(transaction);

		// Clear fields before close modal
		setTitle('');
		setAmount(0);
		setType('deposit');
		setCategory('');

		// Close modal after form submit
		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close">
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input
					type="text"
					placeholder="Título"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={(e) => setAmount(+e.target.value)}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída </span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
