import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

// class-based components save state

class App extends React.Component {
  state = {
    currentTemp: undefined,
    city: undefined,
    currentHumidity: undefined,
    currentSummary: undefined,
    error: undefined,
    formVisible: true
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=${city}`);
    if (city) {
      const results = await api_call.json();
      console.log(results);
      this.setState({
        currentTemp: results.data.attributes.current_temp,
        city: results.data.attributes.location,
        currentHumidity: results.data.attributes.current_humidity,
        currentSummary: results.data.attributes.current_summary,
        error: "",
        formVisible: false
      });
    } else {
      this.setState({
        currentTemp: undefined,
        city: undefined,
        currentHumidity: undefined,
        currentSummary: undefined,
        error: "Please enter a city.",
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar getWeather={this.getWeather}/>
        { this.state.formVisible ? <Form className="form" getWeather={this.getWeather} /> : null } 
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
