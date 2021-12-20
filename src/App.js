import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
  this.state = {
    Person : { fullName:"Ahmed Guindou", bio:"Looking for job", imgSrc:'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg', profession:"Full Stack js Developer"},
    show : true,
    count: 0
  };
}
render(){
  const count = this.state.count
  console.log(this.state.Person.imgSrc)
  return (
  <div className="App">
    {
      this.state.show?
    <div>
      <h1>{this.state.Person.fullName}</h1>
      <h1>{this.state.Person.profession}</h1>
      <div><img src={this.state.Person.imgSrc} alt={"me"}style={{width:500}}></img></div>
      <h1>{this.state.Person.bio}</h1>
      <h1>Current Count : {count}</h1>
    </div>
    :null
    }
    <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>{this.state.show ? "hide" : "show"}</button>
  </div>)
}

componentDidMount() {
  this.myInterval = setInterval (()=>{
    this.setState(prevState => ({
      count: prevState.count + 1
  }))
}, 1000)
}

componentWillUnmount() {
  clearInterval(this.myInterval)
}

}


export default App;