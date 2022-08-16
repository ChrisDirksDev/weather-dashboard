import React, { Component, SyntheticEvent } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import WeatherTileGrid from './weatherTileGrid';
import TabPanel from './tabs';


interface DashboardState {
  value: number;
}
export default class Dashboard extends Component<{}, DashboardState> {

  state = { value: 1 };

  handleChange = (e: SyntheticEvent, newValue: number): void => {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <Box sx={{ width: 500, height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value={1} label="Chicago" />
          <Tab value={2} label="Halifax" />
          <Tab value={3} label="Sydney" />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <WeatherTileGrid />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <WeatherTileGrid />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <WeatherTileGrid />
        </TabPanel>
      </Box>
    )
  }
}
