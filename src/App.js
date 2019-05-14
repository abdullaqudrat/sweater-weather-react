import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
    const api_call = await fetch(`https://fierce-crag-36750.herokuapp.com/api/v1/forecast?location=denver,co`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div> 
    );
  }
};

export default App;
