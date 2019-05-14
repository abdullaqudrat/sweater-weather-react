import React from "react";

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