import { Outlet } from "@remix-run/react";
import Header from "./components/Header";
import Content from "./components/Content";

export default
function App() {
  return <>
    <Header />
    <Content />
    {/* <Outlet /> */}
  </>;
}
