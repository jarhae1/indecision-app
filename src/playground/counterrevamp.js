//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.state = {
            count:props.count
        };
    }

    handleRoll(){
        this.setState(()=>{
            let roll = Math.floor(Math.random() * 12);
            return {
                count: roll
            }
        })
    }


    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count += 1
            }
        })
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count -= 1
            }
        })
    }

    handleReset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
    }

    render(){
        
        return(
        <div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick = {this.handleAddOne}>+1</button>
            <button onClick = {this.handleMinusOne}>-1</button>
            <button onClick = {this.handleReset}>reset</button>
            <button onClick = {this.handleRoll}>roll</button>
        </div>
        );
    }
}


Counter.defaultProps = {
    count: 0
}



const appRoot = document.getElementById('app');
ReactDOM.render(<Counter/>, appRoot);