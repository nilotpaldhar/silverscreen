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
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
