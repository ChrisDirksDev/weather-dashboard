import { Box } from '@mui/material';
import React, { Component } from 'react'
import './tabs.less';

interface TabPanelProps {
  value: number;
  index: number;
  children?: React.ReactNode;
}
interface TabPanelState {
  value: number;
}
export default class TabPanel extends Component<TabPanelProps, { value: number }> {

  state: TabPanelState = { value: this.props.value };

  render() {
    return (
      <Box
        className='tab-panel'
        role="tabpanel"
        hidden={this.state.value !== this.props.index}
        id={`simple-tabpanel-${this.props.index}`}
        aria-labelledby={`simple-tab-${this.props.index}`}
        sx={{ m: 1 }}
      >
        {this.state.value === this.props.index && (
          <Box sx={{ p: 3, backgroundColor: "#eef6fb" }}>
            {this.props.children}
          </Box>
        )}
      </Box>
    );
  }
}
