import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import ContentWrapper from "../../Components/Shared/ContentWrapper";

const Dashboard: React.FC = (): JSX.Element => (
  <ContentWrapper breadCrumbs="Dashboard">
    <Layout />
  </ContentWrapper>
);

export default Dashboard;