import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch,Route, Link
} from "react-router-dom";
import axios from 'axios';
import Sunday from './components/Sunday';
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
import Saturday from './components/Saturday';

 console.log(process.env.REACT_APP_API_KEY)

const API_KEY=process.env.REACT_APP_API_KEY;
console.log(API_KEY);

class App extends React.Component {
constructor(props)
{
  super(props);
  this.state ={
    weatherData: [],
    dataList:[]
  }
}

componentDidMount(){
  this.getWeatherData();
}

//display weather forecast for five days for a particular time
async getWeatherData(){
  const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=dallas&units=imperial&APPID="+API_KEY)
  const weatherDate= response.data.list.filter(date =>date.dt_txt.includes("12:00:00"));
  console.log("weatherDate: ", weatherDate)
  // const weatherData=response.data.list;
  //console.log("weatherData: ", weatherData)
  console.log("response: ",response);
  console.log("response.data: ",response.data);
  console.log("data.list:", response.data.list);
  console.log("data.list:", response.data.list[0]);
  const weatherData=response.data.list;
  

  this.setState({
    weatherData: weatherDate, 
    dataList: response.data.list})

}

fivedayForecast =() => {
  return (this.state.weatherData.map((fiveday, index) => <ul><li> <img src={`https://openweathermap.org/img/w/${fiveday.weather[0].icon}.png`}/> <br/> {fiveday.weather[0].description} <br/>  {fiveday.dt_txt}<br/> Max Temp: {fiveday.main.temp_max}  <br/> Min Temp: {fiveday.main.temp_min} <br/>
  </li></ul>)) ;  

//Referencce: https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon//"http://openweathermap.org/img/w/" + iconcode + ".png"

}
  render(){
    return (
      <div>
        <h1 style={{textAlign:"center"}}>WeatherData-Irving</h1>
        {/* <h4>{this.state.weatherData.map(list => list.dt_txt)}</h4>  */}
        <div className="forecast">
        
          {this.fivedayForecast()}
         
        </div>
      
   
      
        <Router> 
                 <nav className="navstyle">
                   <ul>
                     <li>
                       <Link className="navlinkstyle" to="/Sunday">Sunday</Link>  
                     </li>
                     <li>
                       <Link className="navlinkstyle" to="/Monday">Monday</Link>  
                     </li>
                     <li>
                       <Link className="navlinkstyle" to="/Tuesday">Tuesday</Link>  
                     </li>
                     <li>
                       <Link className="navlinkstyle" to="/Wednesday">Wednesday</Link> 
                     </li>
                     <li>
                       <Link className="navlinkstyle" to="/Thursday">Thursday</Link> 
                     </li>
                     <li>
                       <Link className="navlinkstyle" to="/Friday">Friday</Link> 
                     </li>
                     <li>
                      <Link className="navlinkstyle" to="/Saturday">Saturday</Link> 
                     </li>
                   </ul>
                 </nav>

             <Switch>
              <Route path='/Sunday' component={Sunday}/>
              <Route path='/Monday' component={Monday}>
              
              </Route>
              <Route path='/Tuesday' component={Tuesday}>
               
              </Route>
              <Route path='/Wednesday'>
                <Wednesday/>
              </Route>
              <Route path='/Thursday'>
                <Thursday/>
              </Route>
              <Route path='/Friday'>
                <Friday/>
              </Route>
              <Route path='/Saturday'>
                <Saturday/>
              </Route>
             </Switch>
              {/* <Route path='/Monday' component={Monday}>
              
              </Route>
              <Route path='/Tuesday' component={Tuesday}>
               
              </Route>
              <Route path='/Wednesday'>
                <Wednesday/>
              </Route>
              <Route path='/Thursday'>
                <Thursday/>
              </Route>
              <Route path='/Friday'>
                <Friday/>
              </Route>
              <Route path='/Saturday'>
                <Saturday/>
              </Route>
             </Switch>
             
          </Switch> */}
        {/* </div> */}
      </Router>
      </div>
    );
  }
  }

export default App;
