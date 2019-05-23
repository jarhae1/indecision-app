//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/

//componentDidMount is a lifecycle method that can be used ona  class based component. Stateless funcitonal componenets do not have access to this. 

class CountApp extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count:0,
            rollResults:[]
        }
    }
    componentDidMount(){
        try{
        let json = localStorage.getItem('count')
        let count = parseInt(json,10)
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
           

        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){

        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
        }
        
    }

    handleAddOne(){
        this.setState((prevState)=>({count:prevState.count + 1}))
    }
    handleMinusOne(){
        this.setState((prevState)=>({count:prevState.count - 1}))
    }
    handleReset(){
        this.setState(()=>({count:0}))
    }
    handleRoll(i){
        const rollResults = [];
        for(let counter = 0; counter<i; counter++){
            const roll = Math.floor(Math.random()*6)+1
            rollResults.push(roll)
        }
        this.setState(()=>({rollResults}))
       
    }
    render(){
        return(
            <div>
                <h1>How many dice?</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
                <button onClick={(e)=>{
                    this.handleRoll(this.state.count)
                }}>Roll</button>



                <div>
                {
                  this.state.rollResults.map((option) => 
                  (
                      <h2 className="die" key={option+Math.random()}>{option}</h2>
                        ))
                }
                </div>
            </div>
        )
    }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<CountApp />, appRoot);