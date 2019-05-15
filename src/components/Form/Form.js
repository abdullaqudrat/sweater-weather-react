import React from "react";
import "./Form.css"

// class-based component, this example doesn't need state and can be a stateless functional component, but using as a reference

class Form extends React.Component {
  render() {
    return(
      <div>
        <p>Search for a city to get the weather forecast</p>
        <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter city here..."/>
        <button>Get Forecast</button>
        </form>
      </div>
    );
  }
};

export default Form;