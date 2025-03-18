import React from "react";
import { Layout } from "antd";
import { HeaderComponent } from "./components/header/headerComponent";
import { RouteComponent } from "./components/Routes/RouteComponent";

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <>
      <Layout className="!bg-white dark:!bg-black h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
        <Header className="!bg-white dark:!bg-black">
          <HeaderComponent /> 
        </Header>
        <Layout className="h-screen max-h-screen overflow-y-auto">
          <Content className=" overflow-y-auto overflow-x-hidden">
            <RouteComponent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
