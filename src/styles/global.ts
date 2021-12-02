import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--red: #e52e4d;
		--blue: #5429cc;
		--blue-light: #6933ff;
		--text-title: #363f5f;
		--text-body: #969cb3;
		--background: #f0f2f5;
		--shape: #ffffff;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	// Default font size 16px
	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 16 * 0.9375 = 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5%; // 16 * 0.875 = 14px
		}
	}

	body {
		background: var(---background);
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: default;
	}
`;
