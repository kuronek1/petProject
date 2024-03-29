import React from "react";
import Layout from "../../Components/Chess/Layout";
import ContentWrapper from "../../Components/Shared/ContentWrapper";

const Chess: React.FC = (): JSX.Element => (
  <ContentWrapper breadCrumbs="Chess">
    <Layout />
  </ContentWrapper>
);

export default Chess;