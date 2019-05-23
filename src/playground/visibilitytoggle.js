//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/


const appSettings = {
    showDetails:false
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const showDetails = () => {
    appSettings.showDetails = true;
    render();
}

const hideDetails = () => {
    appSettings.showDetails = false;
    render();
}

const render = () => {

    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {toggleVisibility}>
        {visibility ? 'Hide details' : 'Show Details'}
        </button>
        {visibility && <p>THis is the hidden stuff</p>}
        </div>)
        ReactDOM.render(template, app1);
}


const app1 = document.getElementById('app');
render();


