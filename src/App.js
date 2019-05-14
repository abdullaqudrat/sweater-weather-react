import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    currentTemp: undefined,
    city: undefined,
    currentHumidity: undefined,
    currentSummary: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=${city}`);
    const results = await api_call.json();
    console.log(results);
    this.setState({
      currentTemp: results.data.attributes.current_temp,
      city: results.data.attributes.location,
      currentHumidity: results.data.attributes.current_humidity,
      currentSummary: results.data.attributes.current_summary,
      error: ""
    })
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          currentTemp={this.state.currentTemp}
          city={this.state.city}
          currentHumidity={this.state.currentHumidity}
          currentSummary={this.state.currentSummary}
          error={this.state.error} 
        />
      </div> 
    );
  }
};

export default App;
