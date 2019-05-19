import React from "react";
import "./Form.css"

// class-based component, this example doesn't need state and can be a stateless functional component, but using as a reference

class Form extends React.Component {
  render() {
    return(
      <div className="search">
      <p className="search-title">SWEATER WEATHER</p>
        <p className="search-title">Search for a city to get the weather forecast</p>
        <form onSubmit={this.props.getWeather}>
        <input autoFocus type="text" className="search-input" name="city" placeholder="Enter city here..."/>
        <p><button className="search-button">Get Forecast</button></p>
        </form>
      </div>
    );
  }
};

export default Form;