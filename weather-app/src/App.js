import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Switch,Route, Link
} from "react-router-dom";
import axios from 'axios';
// import Sunday from './components/Sunday';
// import Monday from './components/Monday';
// import Tuesday from './components/Tuesday';
// import Wednesday from './components/Wednesday';
// import Thursday from './components/Thursday';
// import Friday from './components/Friday';
// import Saturday from './components/Saturday';
// import Weather from './components/Weather';
 //console.log(process.env.REACT_APP_API_KEY)

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

async getWeatherData(){
  const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=dallas&units=imperial&APPID="+API_KEY)
  const weatherDate= response.data.list.filter(date =>date.dt_txt.includes("12:00:00"));
  console.log("weatherDate: ", weatherDate)
  // const weatherData=response.data.list;
  console.log("response: ",response);
  console.log("response.data: ",response.data);
  console.log("data.list:", response.data.list);
  console.log("data.list:", response.data.list[0]);
  const weatherData=response.data.list;
  console.log("weatherData: ", weatherData)
  //const listdata=
  // const weatherData2=response.data[1];
  // console.log("weatherData: ",weatherData[0]);
  // console.log("MinMAx: ", weatherData[0].main.temp_min)
  // const fiveDay=weatherData.
  // let weatherArray=[];
  // //let weatherDetail=;
  // for (let i=0; i<7;i++){
      
  //  }
  this.setState({
    weatherData: weatherDate, 
    dataList: response.data.list})

}

fivedayForecast =() => {
  return (this.state.weatherData.map((fiveday, index) => <ul><li> <img src={`https://openweathermap.org/img/w/${fiveday.weather[0].icon}.png`}/> <br/> {fiveday.weather[0].description} <br/>  {fiveday.dt_txt}<br/> Max Temp: {fiveday.main.temp_max}  <br/> Min Temp: {fiveday.main.temp_min} <br/>
  </li></ul>)) ;  
/**works good */
// fivedayForecast =() => {
//   return (this.state.weatherData.map((fiveday, index) => <div className="ulLi1"><ul><li>Description: {fiveday.weather.description} <br/> Dt_Txt: {fiveday.dt_txt}<br/> Max Temp: {fiveday.main.temp_max} </li> <li> Icon: <img src={`https://openweathermap.org/img/w/${fiveday.weather[0].icon}.png`}/> </li>
//   </ul></div>)) ;  
//Referencce: https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon//"http://openweathermap.org/img/w/" + iconcode + ".png"

/** */
// fivedayForecast =() => {
// return (this.state.weatherData.map((fiveday, index) => <div className="ulLi1"><ul><li>Description: {fiveday.weather[0].description} <br/> Min_Temp: {fiveday.weather[0].min_temp} <br/> MAx_Temp: {fiveday.weather[0].max_temp} 
// <br/> Dt_Txt: {fiveday.dt_txt.includes("18:00:00")}
// <br/>Temp: {fiveday.main.temp}</li> </ul></div>)) ;  

}
  render(){
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Weather Data</h1>
        {/* <h4>{this.state.weatherData.map(list => list.dt_txt)}</h4>  */}
        <div className="forecast">
        
          {this.fivedayForecast()}
         
        </div>
      
      </div>
      
      //   <Router>
             
      //            <Weather/>
      //            <nav className="navstyle">
      //              <ul>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Sunday">Sunday</Link>  
      //                </li>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Monday">Monday</Link>  
      //                </li>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Tuesday">Tuesday</Link>  
      //                </li>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Wednesday">Wednesday</Link> 
      //                </li>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Thursday">Thursday</Link> 
      //                </li>
      //                <li>
      //                  <Link className="navlinkstyle" to="/Friday">Friday</Link> 
      //                </li>
      //                <li>
      //                 <Link className="navlinkstyle" to="/Saturday">Saturday</Link> 
      //                </li>
      //              </ul>
      //            </nav>
                
                 
   
       
                
                 
                
      //           {/* <Link to="/Sunday">Sunday</Link>  |
      //           <Link to="/Monday">Monday</Link>   |
      //           <Link to="/Tuesday">Tuesday</Link>  |
      //           <Link to="/Wednesday">Wednesday</Link> |
      //           <Link to="/Thursday">Thursday</Link> |
      //           <Link to="/Friday">Friday</Link> |
      //           <Link to="/Saturday">Saturday</Link>  */}
      //        <Switch>
      //         <Route path='/Sunday' component={Sunday}/>
      //         <Route path='/Monday' component={Monday}>
              
      //         </Route>
      //         <Route path='/Tuesday' component={Tuesday}>
               
      //         </Route>
      //         <Route path='/Wednesday'>
      //           <Wednesday/>
      //         </Route>
      //         <Route path='/Thursday'>
      //           <Thursday/>
      //         </Route>
      //         <Route path='/Friday'>
      //           <Friday/>
      //         </Route>
      //         <Route path='/Saturday'>
      //           <Saturday/>
      //         </Route>
      //        </Switch>
      //         {/* <Route path='/Monday' component={Monday}>
              
      //         </Route>
      //         <Route path='/Tuesday' component={Tuesday}>
               
      //         </Route>
      //         <Route path='/Wednesday'>
      //           <Wednesday/>
      //         </Route>
      //         <Route path='/Thursday'>
      //           <Thursday/>
      //         </Route>
      //         <Route path='/Friday'>
      //           <Friday/>
      //         </Route>
      //         <Route path='/Saturday'>
      //           <Saturday/>
      //         </Route>
      //        </Switch> */}
             
      //     {/* </Switch> */}
      //   {/* </div> */}
      // </Router>
    );
  }
  }

export default App;
