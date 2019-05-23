//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/

class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
        this.state = {
            visibility : false
        }
    }
  
  handleVisibilityToggle(){
      this.setState((prevState)=>{
          return {
              visibility: !prevState.visibility
          }
      })
  }
  
  
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {this.handleVisibilityToggle}>{this.state.visibility ? "Hide Details": "Show Details"}</button>
            {this.state.visibility && <p>This is my treasure</p>}
            </div>
        )
    }
  }
  
  
  
  const appRoot = document.getElementById('app');
  ReactDOM.render(<Visibility />, appRoot);