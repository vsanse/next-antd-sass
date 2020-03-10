
import Page from '../components/Page';


export default function NextApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}
