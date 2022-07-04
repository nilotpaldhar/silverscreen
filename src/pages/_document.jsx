import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * RootDocument Class.
 */
class RootDocument extends Document {
	/**
	 * Render the RootDocument component.
	 */
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
