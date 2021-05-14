import React from 'react';
import "./App.css";
import photo from './delete.png'



class App extends React.Component {
  constructor() {
    super();

      this.state = {
        counter: 0

      }

  }

  render(){

    return (
      <div className="App">
        
        <header className="App-header">
        
          <h2> counter application demo </h2>
          <h1> counter is :{this.state.counter} </h1>
          <div>
            <button onClick={()=>this.setState({
              counter: this.state.counter +1
                }) 
              } 
              > 
            + 
            </button>

            <button onClick={()=>this.setState({
              counter:0
            })
            
            }
            > 
            <img style={{width:15 ,height:15 }} src={photo} alt ='pic' />   
            </button>
            
            <button onClick={()=>this.setState({
              counter: this.state.counter -1
            })
            } 
            > 
              - 
            </button>
          
          </div>
        
        </header>
      
      </div>
    );
  }

}

export default App;
