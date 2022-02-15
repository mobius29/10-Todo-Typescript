import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: #e9ecef;
	}

	a {
		text-decoration: none;
	}

	ol, ul, li {
		list-style: none;
	}

	input {
		background: none;
		outline: none;
		border: none;
	}

	button {
		background: none;
		outline: none;
		border: none;
	}
`

export default GlobalStyle
