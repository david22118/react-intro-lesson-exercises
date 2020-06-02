import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
   return <h1>monday</h1>
  }

  getMorningGreeting() {
  return  <p>Good Morning</p>
  }

  getEveningGreeting() {
  return  <p>Sleep Well</p>
  }

  showCompany(name, revenue) {
   let y=[]
   for(let i=0;i<name.length;i++){
    y.push(<div id={name[i]}>{name[i]} makes {revenue[i]} every year</div>)
   }
   return y
  }

  getClassName(temperature) {
   if(temperature<15){
    return <div id="weatherBox" class="freezing"></div> 
   }
   else if(temperature>15&&temperature<30){
     return <div id="weatherBox" class="fair"></div>
   }
   else{
      return <div id="weatherBox" class="hell-scape"></div>
   }
  }
  getGreeting(){
    if((new Date().getHours())<12){
      return this.getMorningGreeting()
    }else {
      return this.getEveningGreeting()
    }
  }
  arry(){
  return [<p>some greetings for you :</p>, this.getMorningGreeting(),this.getEveningGreeting()];
  }


  render() {
   
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    
    return (
      <div>
       
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
           
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
         {/*  {(new Date().getHours())<=12?this.getMorningGreeting():this.getEveningGreeting()} */}
         {this.getGreeting()}
    
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {this.arry()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {this.showCompany(companies.map(c=>c.name),companies.map(c=>c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(10)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
