
import Page from '../components/Page';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import configureStore from "../store";

const store = configureStore();

export default function NextApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Page>
                <Component {...pageProps} />
            </Page>
        </Provider>
    )
}
