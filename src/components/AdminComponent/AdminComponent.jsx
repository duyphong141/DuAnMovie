import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import AdminFilms from '../../pages/Admin/Films/AdminFilms';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('User', '1', <UserOutlined />),
  getItem('Films', 'sub1',<DesktopOutlined /> , [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
  ]),
  getItem('Option 2', '2', <PieChartOutlined />,)
];


const AdminComponent = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="pt-5">
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" items={items} />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {AdminFilms()}
          </div>
        </Content>
      </Layout>
      

    </Layout>

    
    
  );
};
export default AdminComponent;