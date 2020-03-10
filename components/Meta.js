import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.png" />
            <link rel="stylesheet" type="text/css" href="../assets/static/nprogress.css" />
            <title>NextJS+Antd+SASS</title>
        </Head>
    )
}