import Modal from 'react-modal';

interface Props {
	isOpen: boolean;
	onRequestClose(): void;
}

export default function TransactionModal({ isOpen, onRequestClose }: Props) {
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>hey</h2>
		</Modal>
	);
}
