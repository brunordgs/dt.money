import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export default function Header({ onOpenModal }: { onOpenModal(): void }) {
	return (
		<Container>
			<Content>
				<img src={logo} alt="dt money" />

				<button type="button" onClick={onOpenModal}>
					Nova transação
				</button>
			</Content>
		</Container>
	);
}
