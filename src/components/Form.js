import React from "react";

// class-based component, this example doesn't need state and can be a stateless functional component, but using as a reference

class Form extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" place="City..."/>
          <button>Get Forecast</button>
        </form>
      </div>
    );
  }
};

export default Form;