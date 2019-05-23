//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/

//componentDidMount is a lifecycle method that can be used ona  class based component. Stateless funcitonal componenets do not have access to this. 

//webpack: moduler bunderler for modern javascript apps

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options,
        randomItem:""
      };
    }
//lifecycle methods that can be used on class based componenets
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            options && this.setState(()=>({options}))
        }catch(e){
            
        }

        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            let json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json);
            console.log('saving data!',json)
        }
        
    }
    componentWillUnmount(){
        console.log('componenetWillUnmount')
    }
//custom handlers and methods to be used as props and set state etc
    handleDeleteOptions() {
      this.setState(() => ({options: [],randomItem:""}));
    }
    handleDeleteOption(optionToRemove){

        //let newState = this.state.options.filter((selection)=>selection !== option);
        this.setState((prevState)=>(
            {options:prevState.options.filter((option)=>optionToRemove !== option),
            randomItem:""}
            ))
    }

    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
              this.setState(()=> ({randomItem:option}));
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            randomItem = {this.state.randomItem}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: 'Indecision'
  };
  
  const Action =(props) =>{
    return (
        <div>
        {props.hasOptions &&  <button onClick = {props.handlePick}>What should I do</button> }
        {props.hasOptions &&  <h1>{props.randomItem}</h1>}
        </div>           
    );

}
  
  const Options = (props) => {
    return (
      <div>
      {props.options.length !== 0 && <button onClick={props.handleDeleteOptions}>Remove All</button>}
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        <ul>
        {
          props.options.map((option) => 
          (
              <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
                />
                ))
        }
        </ul>
      </div>
    );
  };
  
  const Option = (props) => {
    return (
      <div>
        {props.optionText} <span>:</span>
        <button onClick = 
        {(e)=>{
            props.handleDeleteOption(props.optionText)
        }}
        >
        Remove
        </button>

      </div>
    );
  };
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));

      if(!error){
        e.target.elements.option.value = "";
      } 

    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);