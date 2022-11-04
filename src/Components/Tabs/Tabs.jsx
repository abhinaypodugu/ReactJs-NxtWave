import React, { memo, useEffect, useState } from "react";
import { TabContainer, TabItem } from "./Styles";

const Tab = ({ tabsList, onTabSelected }) => {
  const [tabId, setTabId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(tabId);
  }, [tabId]);

  return (
    <TabContainer>
      {tabsList.map((tab) => (
        <TabItem
          key={String(tab.index)}
          center={tab.center}
          first={tab.first}
          last={tab.last}
          onClick={() => setTabId(tab.index)}
          selected={tabId === tab.index}
        >
          {tab.name}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tab;
