import { Outlet } from "@remix-run/react";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";

export default
function App() {
  return <>
    <Header />
    <Sider />
    <Content>
      <Outlet />
    </Content>
  </>;
}
