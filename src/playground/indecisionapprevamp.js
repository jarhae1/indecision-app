//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/



class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing three']
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
        </div>
        );
    }
}


class Header extends React.Component{
    render(){
        return  (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>

        );
    }
}

class Action extends React.Component{
    handlePick(){
        console.log('hello');
    }
    render(){
        return (
            <div>
            <button onClick = {this.handlePick}>What should I do</button>          
            </div>           
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option) => <p key={option} id={option}>{option}</p>)}
            <ol>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <li>Option: {this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option){
            console.log(option);
           
        }
        e.target.elements.option.value = '';

    }

    render(){
       return(
        <div>
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
       );

    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);