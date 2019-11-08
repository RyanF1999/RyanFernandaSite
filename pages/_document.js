// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class RootDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
            />
            <meta name="author" content="Ryan Fernanda"/>
            
            <link rel="manifest" href="/manifest.json" />
            
            <style jsx global>{`
                body{
                    overflow-x: hidden;
                    overflow-y: auto;
                    background-color: #E8EFEF !important;
                }
            
                @media (max-width: 575px) {
                    body{
                    overflow-y: -moz-scrollbars-none;
                    -ms-overflow-style: none;
                    }
            
                    body::-webkit-scrollbar{
                    width: 0px !important;
                    }
                }
            
                ::-webkit-scrollbar{
                    width: 10px !important;
                }
            
                ::-webkit-scrollbar-track{
                    background-color: rgb(110, 110, 110);
                }
            
                ::-webkit-scrollbar-thumb{
                    background-color: rgb(255, 255, 255);
                }
            `}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument