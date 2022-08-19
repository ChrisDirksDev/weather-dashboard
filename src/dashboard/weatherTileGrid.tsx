import { Component } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import WeatherTile from './weatherTile'


type WeatherTileGridProps = {
  location: string,
}

type WeatherTileGridState = {
  loaded: boolean,
  data: any[],

}
export default class WeatherTileGrid extends Component<WeatherTileGridProps, WeatherTileGridState> {

  state = { data: [], loaded: false };

  componentDidMount() {
    const urls = [this.getUrl('weather', this.props.location), this.getUrl('forecast', this.props.location)];
    const promises = urls.map(u => fetch(u).then(x => x.json()));
    Promise.all(promises)
      .then((json) => {
        console.log(json);
        this.setState({
          loaded: true,
          data: json
        });
      })
  }

  getUrl = (type: string, location: string) => `https://api.openweathermap.org/data/2.5/${type}?q=${location}&mode=json&appid=ec85538029e696a2c784883265a9bc64&units=metric`;

  render() {

    if (!this.state.loaded) {
      return (<span>Loading...</span>)
    } else {

      if (!this.state.data || (this.state.data[0] as any).cod != 200) {
        return (<span>There was an error getting weather for this location.</span>)
      }


      const d = new Date();
      const nextDays: number[] = [];

      // This offset is to handle that we are getting back 3 hour intervals for our forcast day using UTC time
      // We take the locations UTC offset in hours and round it off to the closest multiple of 3 and use that time
      // Eg: Syndey, Australia is +10 hours from UTC. The closest multiple of 3 to that is 9. We remove 9 hours off UTC
      // to get it as close to our desired time of noon. We are getting 1 PM Sydney time for our display.
      const offset = Math.round(((this.state.data[1] as any).city.timezone / 3600) / 3) * 10800;
      for (let index = 1; index < 5; index++) {
        nextDays.push(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + index,
          12, 0, 0) - (offset * 1000));
      }

      // Javascript uses ms instead of seconds for UTC so we need to multiply it to compare
      const filteredList = (this.state.data[1] as any).list?.filter((x: any, index: number) => nextDays.includes(x.dt * 1000));

      filteredList.unshift(this.state.data[0]);

      const previewDays = filteredList.map((day: any) => {
        return {
          day: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }), temp: day.main.temp, weather: { desc: day.weather[0].description, icon: day.weather[0].icon }
        }
      })

      return (
        <Grid container spacing={0.5}>
          <Grid container xs={12}>
            <WeatherTile size='large' {...previewDays[0]} day='Today' />
          </Grid>
          <Grid container xs={3}>
            <WeatherTile {...previewDays[1]} />
          </Grid>
          <Grid container xs={3}>
            <WeatherTile  {...previewDays[2]} />
          </Grid>
          <Grid container xs={3}>
            <WeatherTile  {...previewDays[3]} />
          </Grid>
          <Grid container xs={3}>
            <WeatherTile  {...previewDays[4]} />
          </Grid>
        </Grid>
      )
    }
  }
}
