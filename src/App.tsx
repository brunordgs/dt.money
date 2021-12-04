import { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import TransactionModal from './components/TransactionModal';
import { GlobalStyle } from './styles/global';

// Make sure to bind modal to root element (accessibility)
Modal.setAppElement('#root');

export default function App() {
	const [isOpen, setIsOpen] = useState(false);

	function openModalHandler() {
		setIsOpen(true);
	}

	function closeModalHandler() {
		setIsOpen(false);
	}

	return (
		<>
			<Header onOpenModal={openModalHandler} />
			<Dashboard />

			<TransactionModal isOpen={isOpen} onRequestClose={closeModalHandler} />
			<GlobalStyle />
		</>
	);
}
