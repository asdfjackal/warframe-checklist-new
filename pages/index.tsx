import { useState } from 'react';
import { Box, Card, CardContent, Link, Tab, Tabs } from '@mui/material';
import type { NextPage } from 'next';
import { a11yProps, TabPanel } from '../components/TabPanel';
import Warframes from 'warframe-items/data/json/Warframes.json';
import Checklist from '../components/Checklist';

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <br />
      <Card>
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Navigation Tabs"
            >
              <Tab label="Warframes" {...a11yProps(0)} />
              <Tab label="Primaries" {...a11yProps(1)} />
              <Tab label="Secondaries" {...a11yProps(2)} />
              <Tab label="Melee" {...a11yProps(3)} />
              <Tab label="Archwings" {...a11yProps(4)} />
              <Tab label="K-Drives" {...a11yProps(5)} />
              <Tab label="Amps" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Warframes
            <Checklist items={Warframes} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Primaries
          </TabPanel>
          <TabPanel value={value} index={2}>
            Secondaries
          </TabPanel>
          <TabPanel value={value} index={3}>
            Melee
          </TabPanel>
          <TabPanel value={value} index={4}>
            Archwings
          </TabPanel>
          <TabPanel value={value} index={5}>
            K-Drives
          </TabPanel>
          <TabPanel value={value} index={6}>
            Amps
          </TabPanel>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
