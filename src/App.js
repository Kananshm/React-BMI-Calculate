import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state={
    weigth:null,
    height:null,
    resultBMI:null,
    description:""
  }
handleWeight=(e)=>{
this.setState({weigth : e.target.value})
}
handleHeight=(e)=>{
  this.setState({height : e.target.value})
}
calculate =()=>{
let weight = this.state.weigth;
let height = this.state.height;

if (weight > 0 && height > 0) {
 let  resultBMI = weight / (((height / 100) * height) / 100);
  let description = "";

  this.setState({ resultBMI: resultBMI });
  if(resultBMI < 18.5){
   description  = "Sizin kutle indeksiniz ashagidir! "
  }
  else if(resultBMI <= 18.5 && resultBMI<25){
description = "Sizin kutle indeksiniz normadadir !"

  }
  else if(resultBMI > 25){
    description = "Sizin kutle indeksiniz yuksekdir !"
    
      }
      else{
       alert("xanani doldurun !");
      }
      this.setState({description : description})
    }
}

  render() {
    return (
      <div className="App-elements">
      <div className="container ">
        <div className="row mt-4">
          <div className="col-sm-12 ">
            <h2>BMI</h2>
            <label className="weight">Çəkinizi daxil edin: </label>
            <input
              type="text"
              name="weight"
              className="weight"
              onChange={this.handleWeight}
            />
            <br />
            <label className="height">Boyunuzu daxil edin(cm): </label>
            <input
              type="text"
              name="height"
              className="height"
              onChange={this.handleHeight}
            />
            <br />
            <br />
            <button 
            onClick={this.calculate}
            className="btn btn-primary">
              Hesabla
            </button>
            <br />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <p>Sizin boy/kutle indeksiniz: {this.state.resultBMI}</p> <br />
            <p>Netice: {this.state.description}</p> <br />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;
