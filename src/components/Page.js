import React from 'react';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import Meta from './Meta';
import '../assets/styles/app/main.scss';
const { Header, Content, Footer } = Layout;

export default function Page(props) {
    return (
        <>
            <Meta />
            <Layout className="app">
                <Header className="header">
                    <AppHeader />
                </Header>
                <Content className="app-body">
                        {props.children}
                </Content>
                <Footer className="app-footer" >
                    © VSANSE {new Date().getFullYear()}. Demo Purpose Only.
                </Footer>
            </Layout>
        </>
    )
}