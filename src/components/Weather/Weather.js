import React from "react";
import "./Weather.css";

// stateless functional component is used to render, when state is unnecessary. remove "this"(class-based) and render() and pass arg ("props") in const declaration
// if an arrow function is returning 1 single element div, you can explicitly return by using parentheses
// if an arrow funtion is using one arg, then arg doesnt need parentheses

const Weather = props => (
  <div className="results">
    <div className="location">{ props.city && <p>{ props.city }</p> }</div>
    <div className="current-temp">{ props.currentTemp && <p>{ Math.round(props.currentTemp) } &deg; F </p> }</div>
    <div className="current-icon">{ props.currentIcon && <p>ICON { props.currentIcon }</p> }</div>
    <div className="current-info">
      <div className="current-date">{ props.currentDate && <p>{ props.currentDate }</p> }</div>
      <div className="current-time">{ props.currentTime && <p>{ props.currentTime }</p> }</div>
      <div className="current-summary">{ props.currentSummary && <p>Current Summary: { props.currentSummary }</p> }</div>
      <div className="current-feels-like">{ props.currentFeelsLike && <p>Feels Like: { props.currentFeelsLike }</p> }</div>
      <div className="current-high">{ props.currentHigh && <p>Current High: { Math.round(props.currentHigh) } &deg; F </p> }</div>
      <div className="current-low">{ props.currentLow && <p>Current Low: { Math.round(props.currentLow) } &deg; F </p> }</div>
      <div className="current-humidity">{ props.currentHumidity && <p>Current Humdity: { props.currentHumidity * 100 }%</p> }</div>
    </div>
    <div className="error">{ props.error && <p>{ props.error }</p> }</div>
  </div>
);

export default Weather;