import React from "react";

class Weather extends React.Component {
  render() {
    return(
      <div>
        { this.props.currentTemp && <p>Current Temperature: { this.props.currentTemp }</p> }
        { this.props.city && <p>Location: { this.props.city }</p> }
        { this.props.currentHumidity && <p>Current Humdity: { this.props.currentHumidity }</p> }
        { this.props.currentSummary && <p>Current Summary: { this.props.currentSummary }</p> }
        { this.props.error && <p>{ this.props.error }</p> }
      </div>
    );
  }
};

export default Weather;