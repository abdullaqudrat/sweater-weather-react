import React from "react";

// stateless functional component is used to render, when state is unnecessary. remove "this"(class-based) and render() and pass arg ("props") in const declaration
// if an arrow function is returning 1 single element div, you can explicitly return by using parentheses
// if an arrow funtion is using one arg, then arg doesnt need parentheses

const Weather = props => (
  <div>
    { props.currentTemp && <p>Current Temperature: { props.currentTemp }</p> }
    { props.city && <p>Location: { props.city }</p> }
    { props.currentHumidity && <p>Current Humdity: { props.currentHumidity }</p> }
    { props.currentSummary && <p>Current Summary: { props.currentSummary }</p> }
    { props.error && <p>{ props.error }</p> }
  </div>
);

export default Weather;