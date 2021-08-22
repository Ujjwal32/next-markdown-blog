import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://{{cdn}}/prism@v1.x/components/prism-core.min.js"></script>
	        <script src="https://{{cdn}}/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
        </body>
      </Html>
    )
  }
}