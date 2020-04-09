import React, { Component } from 'react'
import axios from 'axios';

const API_key=process.env.REACT_APP_API_KEY;
// const url="https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid="+API_key
// console.log(url)

//console.log("api: ",process.env.REACT_APP_API_KEY);

//console.log("api: ",API_key);
export default class Friday extends Component {
   state = {
       minTemp: [],
       city:null,
       description:null,
       maxTemp:null
   }

  
   async getweather(){
       
    try{
        const response= await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=dallas&units=metric&APPID="+API_key)
        //http://api.openweathermap.org/data/2.5/forecast?q=dallas&units=metric&APPID=
        //const response= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid={API_key}`)
        //console.log("testVariable", testVariable);
        console.log("response: ",response);
        console.log("response: ",response.data);
        const minTemp = response.data.list[0].main.temp_min;
        console.log("minTemp: ",minTemp)
        const description = response.data.list[0].weather[0].description;
        console.log(description)
        const city = response.data.city.name;
        console.log(city)
        const dt_txt= response.data.list[0].dt_txt;
        console.log(dt_txt)
        const maxTemp = response.data.list[0].main.temp_min;
        console.log("miaxemp: ",maxTemp)

        this.setState({minTemp,
            description, city, dt_txt, maxTemp});

        }
        catch(e){
            console.log(e.response);
        }
        }
        componentDidMount(){
            this.getweather();
            console.log(API_key);
        }
            render() {
                return (
                    <div>
                       <h1>Friday</h1>
                       <h2>
                      City: {this.state.city}
                       <br/> minTemp: {this.state.minTemp}
                       <br/> maxTemp: {this.state.maxTemp}
                          <br/> description: {this.state.description}
                          <br/>date: {this.state.dt_txt}
                          </h2>
                    </div>
                );
            }
        }
        
            
        