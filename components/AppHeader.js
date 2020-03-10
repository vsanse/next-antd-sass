import Router from 'next/router';
import { StarFilled } from '@ant-design/icons';
import NPprogress from 'nprogress';

Router.onRouteChangeStart = () => {
    NPprogress.start();
}

Router.onRouteChangeComplete = () => {
    NPprogress.done()
};

Router.onRouteChangeError  = () => {
    NPprogress.done()
};


export default function AppHeader() {
    return (
        <>
        <div className="logo">
            <StarFilled />
            <h1><i>VSANSE</i></h1>
            <StarFilled />
        </div>
    </>
    )
}