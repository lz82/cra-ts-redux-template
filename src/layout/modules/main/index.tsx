import React, { FC } from 'react';
import { Layout } from 'antd';
import css from './index.module.less';

const { Header, Sider, Content, Footer } = Layout;

const LayoutMain: FC = (props) => {
  return (
    <Layout className={css['layout-main']}>
      <Header className={css['header']}>header</Header>
      <Layout>
        <Sider>sider</Sider>
        <Content className={css['content']}>{props.children}</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default LayoutMain;
