import React, { Component } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import WeatherTile from './weatherTile'

export default class WeatherTileGrid extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <WeatherTile size='large' date={0} />
                </Grid>
                <Grid xs={3}>
                    <WeatherTile size='small' date={1} />
                </Grid>
                <Grid xs={3}>
                    <WeatherTile size='small' date={2} />
                </Grid>
                <Grid xs={3}>
                    <WeatherTile size='small' date={3} />
                </Grid>
                <Grid xs={3}>
                    <WeatherTile size='small' date={4} />
                </Grid>
            </Grid>
        )
    }
}
