import { Box } from '@mui/material';
import React, { Component } from 'react'
import './tabs.less';

type TabPanelProps = {
  value: number;
  index: number;
  children?: React.ReactNode;
}
type TabPanelState = {
  value: number;
}
export default class TabPanel extends Component<TabPanelProps, TabPanelState> {
  render() {
    return (
      <Box
        className='tab-panel'
        role="tabpanel"
        id={`simple-tabpanel-${this.props.index}`}
        aria-labelledby={`simple-tab-${this.props.index}`}
        sx={{ m: 1, borderRadius: '5px', width: '100%', display: `${this.props.value !== this.props.index ? 'none' : 'block'}` }}
      >
        <Box sx={{ p: 0.5 }}>
          {this.props.children}
        </Box>

      </Box>
    );
  }
}
