import { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
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

			<Modal isOpen={isOpen} onRequestClose={closeModalHandler}>
				<h2>hey</h2>
			</Modal>
			<GlobalStyle />
		</>
	);
}
