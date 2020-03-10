import React from 'react';
import Header from './Header';
import Meta from './Meta';



export default function Page(props) {
    return (
        <>
            <Meta />
            <Header />
            {props.children}
        </>
    )
}