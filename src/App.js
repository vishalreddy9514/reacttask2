import {Component} from "react"
import './App.css';
import {Numbers,Arithmetic} from "./component/Numbers";

const numbers =["7","8","9","4","5","6","1","2","3","0",".","="]
const arithmaticoperations=["X","/","*","-","+"]
class App extends Component{
  state={res:""}
  clickedBtn =(num)=>{
    const {res} =this.state
    if (res===0){
      this.setState({res:num})
    }
    else if(num === "="){
      const result =eval(this.state.res)
      this.setState({res:result.toString()})
    }
    else{
      this.setState((prevState)=>({res:prevState.res+num}))
    } 
  }

  clickedOperBtn =(arth) =>{
    const {res} =this.state
    if(res === ""){
      this.setState({res:""})
    }
    else if(arth==="X"){
      this.setState({res:res.toString().slice(0,-1)})
    }
    else if(arth !=="X") {
      this.setState((prevState)=>({res:prevState.res+arth}))
    }
   
  }

  render(){
    const {res}=this.state
      return (
        <div className="calculator-container">
            <div className="numbers-dis-container">
                <p className="numbers-display">{res}</p>
                <div className="buttons-container">
                <ul className="numbers-list">
                    {numbers.map((eachItem)=>(
                      <Numbers num={eachItem} clickedBtn={this.clickedBtn}/>
                    ))}
                </ul>
                <ul className="operations-list">
                  {arithmaticoperations.map((eachOper)=>(
                    <Arithmetic arth={eachOper}  clickedOperBtn={this.clickedOperBtn}/>
                  ))}
                </ul>
                </div>
            </div>
        </div>
      )
  }
}

export default App;