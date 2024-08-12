import { Outlet } from "@remix-run/react";
import Content from "~/components/Content";
import Header from "~/components/Header";
import Menu from "~/components/Menu";
import Sider from "~/components/Sider";

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
