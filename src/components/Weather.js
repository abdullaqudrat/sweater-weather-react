import React from "react";

class Weather extends React.Component {
  render() {
    return(
      <div>
        <p>Current Temperature: { this.props.currentTemp }</p>
        <p>Location: { this.props.city }</p>
        <p>Current Humdity: { this.props.currentHumidity }</p>
        <p>Current Summary: { this.props.currentSummary }</p>
      </div>
    );
  }
};

export default Weather;