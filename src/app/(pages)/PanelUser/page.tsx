import React from "react";
import Container from "../../../../components/Module/container/Container";
import { panelMetadata } from "../../../../lib/Metadata";
import PanelChart from "../../../../components/Module/Panel/PanelChart";
export const metadata = panelMetadata;
function Panel() {
  return (
    <Container>
      <PanelChart />
    </Container>
  );
}

export default Panel;
