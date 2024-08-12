import { Outlet } from "@remix-run/react";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Menu from "./components/Menu";

export default
function App() {
  return <>
    <Header />
    <Sider>
      {/* <Menu items={Array(100).fill(0).map((_, index) => ({
        name: `路由你好路由你好路由你好路由你好路由你好路由你好${index + 1}`,
        path: `/${index + 1}`,
      }))} /> */}
      <Menu />
    </Sider>
    <Content>
      <Outlet />
    </Content>
  </>;
}
