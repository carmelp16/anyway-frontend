import React, { FC, useMemo } from "react";
import { Tabs } from "antd";
import { TabsProps } from "antd/lib/tabs";

import { AccidentType } from "../accidents-types";

const { TabPane } = Tabs;

interface AccidentsTabsProps {
  tabToComponent: Record<string, FC>;
  displayMode: string;
  names: AccidentType[];
}

const AccidentsTabs: FC<AccidentsTabsProps> = props => {
  const { tabToComponent, displayMode, names } = props;

  const tabsProps: Readonly<TabsProps> = useMemo(() => {
    return {
      defaultActiveKey: "1",
      tabPosition: displayMode
    } as Readonly<TabsProps>;
  }, [displayMode]);

  const tabsRendered = useMemo(() => {
    return names.map(name => (
      <TabPane tab={name} key={name}>
        {tabToComponent[name]}
      </TabPane>
    ));
  }, [names, tabToComponent]);

  return <Tabs {...tabsProps}>{tabsRendered}</Tabs>;
};

export default AccidentsTabs;
