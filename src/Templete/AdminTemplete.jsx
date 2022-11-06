import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { Fragment, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AdminFilms from '../pages/Admin/Films/AdminFilms';




const AdminTemplete = (props) => {
  const [collapsed, setCollapsed] = useState(false);
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
    getItem('Films', 'sub1', <DesktopOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
    ]),
    getItem('Option 2', '2', <PieChartOutlined />,)
  ];

  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>
      <Layout
        style={{
          minHeight: '100vh',
        }}

      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="pt-5">
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/AdminDashBoarh">Users</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
              <Menu.Item key="10" icon={<FileOutlined />}>
                <NavLink to="/Admin/Films">Films</NavLink>

              </Menu.Item>
              <Menu.Item key="11" icon={<FileOutlined />}>
                <NavLink to="/Admin/Films/AdminAddFilms">Add new</NavLink>
              </Menu.Item>
            </SubMenu>


          </Menu>
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
    </Fragment>
  }} />

};
export default AdminTemplete
