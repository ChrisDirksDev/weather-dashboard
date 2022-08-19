import { Component } from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import './weatherTile.less';
import { Box } from '@mui/system';

type WeatherTileProps = {
  size?: "large" | "small",
  day: string,
  weather: { desc: string, icon: string },
  temp: number,
}
export default class WeatherTile extends Component<WeatherTileProps> {
  static defaultProps = {
    size: 'small',
  };

  iconUrl = `http://openweathermap.org/img/wn/${this.props.weather.icon}${(this.props.size === 'large') ? '@2x' : ''}.png`;

  render() {
    return (
      <Box sx={{ width: '100%', padding: '2px' }} className='weather-tile'>
        {this.props.size === 'large' && (
          <Grid xs={12} container spacing={0.5} className={`${this.props.size}`}
            sx={{ backgroundColor: "#eef6fb", borderRadius: 1 }}>
            <Grid xs={12}>
              <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                <Typography className='day-label'>{this.props.day}</Typography>
              </Box>
            </Grid>
            <Grid container xs={12}>
              <Grid xs >
                <Box display={'flex'} sx={{ justifyContent: 'right' }}>
                  <img alt={this.props.weather.desc} src={this.iconUrl}></img>
                </Box>
              </Grid>
              <Grid xs>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingTop: '25px' }}>
                  <Typography className='temp-label'>{Math.round(this.props.temp)}&#176;</Typography>
                  {this.props.size === 'large' && <Typography className='desc-label'>{this.props.weather.desc}</Typography>}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        )}
        {this.props.size === 'small' && (
          <Box className={`${this.props.size}`} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "#eef6fb", borderRadius: 1 }}>
            <Typography className='day-label'>{this.props.day}</Typography>
            <img className='small-tile-img' alt={this.props.weather.desc} src={this.iconUrl}></img>
            <Typography className='temp-label'>{Math.round(this.props.temp)}&#176;</Typography>
          </Box>
        )}
      </Box>
    )
  }
}

