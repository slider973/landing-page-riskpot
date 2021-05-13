import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <link href="https://static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css" rel="stylesheet" />
                    <link href="//db.onlinewebfonts.com/c/9a7e574c3eda05d71d03345d3f9e268e?family=FuturaLTW01-LightOblique" rel="stylesheet" type="text/css"/>
                    <title>Riskspot</title>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument