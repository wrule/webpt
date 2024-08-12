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
      <Menu />
    </Sider>
    <Content>
      <Outlet />
    </Content>
  </>;
}
