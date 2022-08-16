import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@mui/material'

export default class WeatherTile extends Component<{ size?: "large" | "small", date: string | number }> {

  render() {
    return (
      <Container
        sx={{ p: 0 }}>
        <div>WeatherTile</div>
      </Container>
    )
  }
}
