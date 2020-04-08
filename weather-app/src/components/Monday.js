import React from 'react';
import axios from 'axios';

 //const testVariable=process.env.REACT_APP_API_KEY;
//console.log(testVariable)
export default function Monday() {
    async function getweather(){
       
        try{
            const testVariable=process.env.REACT_APP_API_KEY;
            const response= await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=testVariable")
            console.log("testVariable", testVariable);
            console.log("response: ",response.data);
        }
    catch(e){
        console.error(e);
    }
}
getweather();
    return (
        <div>
            <h1>Monday</h1>
            <h2>getweather()</h2>
        </div>
    );
}
