import { Component, SyntheticEvent } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import WeatherTileGrid from './weatherTileGrid';
import TabPanel from './tabs';
import './dashboard.less'

type DashboardState = {
  value: number;
}

const locations = [
  { name: 'Chicago', location: 'Chicago,us' },
  { name: 'Halifax', location: 'Halifax,ca' },
  { name: 'Sydney', location: 'Sydney,au' }
]
export default class Dashboard extends Component<{}, DashboardState> {

  state = { value: 1 };

  handleChange = (e: SyntheticEvent, newValue: number): void => {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <Box className='tabs-container' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px' }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          textColor="primary"
          sx={{ width: '100%', '& .MuiTabs-flexContainer': { justifyContent: 'space-around' } }}
          TabIndicatorProps={{ style: { display: 'none' } }}
          aria-label="primary tabs"
        >
          {locations.map((loc, index) => (<Tab key={loc.location} value={index + 1} label={<span className='tab-label'>{loc.name}</span>} />)
          )};
        </Tabs>
        {locations.map((loc, index) => (
          <TabPanel key={loc.location} value={this.state.value} index={index + 1}>
            <WeatherTileGrid location={loc.location} />
          </TabPanel>
        )
        )}
      </Box>
    )
  }
}
