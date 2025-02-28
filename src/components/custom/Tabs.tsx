import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  Box,
  Typography,
  TabsOwnProps,
} from "@mui/material";

// Define the props for the TabPanel component
interface TabPanelProps {
  children?: React.ReactNode;
  className?: string;
  index: string;
  value: string;
}

// TabPanel component
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Define the props for the ReusableTabs component
interface ReusableTabsProps {
  tabs: { label: string; value: string; content: React.ReactNode }[];
  defaultValue?: string;
  variant?: TabsOwnProps["variant"];
}

// ReusableTabs component
export default function CustomTabs({
  tabs,
  variant = "scrollable",
  defaultValue = "1",
}: ReusableTabsProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false}>
      <Tabs
        selectionFollowsFocus
        variant={variant}
        scrollButtons={"auto"}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        className="border-[1.5px] rounded-tl-md rounded-tr-md"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} wrapped />
        ))}
      </Tabs>

      {tabs.map((tab) => (
        <TabPanel
          className={"border-[1.5px] border-t-0 rounded-bl-md rounded-br-md"}
          key={tab.value}
          value={value}
          index={tab.value}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Container>
  );
}
