//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/


console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[],
    selectedOption:''
};

const user = {
    name: 'Jared Cannon',
    age: 19,
    location:'Pleasant Grove',
    car:'sentra'
};

const getLocation = (location) =>{
    return location ? <p>Location: {location}</p> : "";
    }
const getCar = (car) => {
    if( car === 'corolla') {
        return 'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202017/Cars/May/CR-Cars-Inline-2013-Toyota-Corolla-05-17'
    } else if(car === 'sentra'){
        return 'https://www.cowlesnissan.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Nissan/2019/Sentra/images/2019-Nissan-Sentra-01.jpg'
    } 
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        //app.options.map(x => console.log(x));
    }
    renderIndecisionApp();
}


const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
 let numberInArray = app.options.length;
 let randomItem = Math.floor(Math.random()*numberInArray);
 app.selectedOption = app.options[randomItem];
 renderIndecisionApp();
}


const numbers = [55,23,45];
const renderIndecisionApp = () => {

    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options && app.options.length > 0) ? <p>Here are your options</p> : <p>No Options Available</p>}
            {app.selectedOption && <p>Selected Option: {app.selectedOption}</p>}
            <ol>
                {app.options.map((option)=>{
                    return <li key={option + Math.random()}>{option}</li>
                })}
            </ol>

           <form onSubmit = {onFormSubmit}>
           <input type="text" name="option"/>
           <button>Add Option</button> 
          </form>
          <br></br>
            {(app.options && app.options.length > 0) && <button onClick = {removeAll}>Remove All Options</button>}
            {(app.options && app.options.length > 0) && <button onClick = {onMakeDecision}>What should I do?</button>}
            <ol>
                <li>Name: {user.name ? user.name : 'Anonymous'}</li>
                <li>Age: {user.age ? user.age : 'Unknown'}</li>
                <li>Car: {user.car ? user.car : 'No Car' }</li>
            </ol>

          
           <img id='carPicture' src={getCar(user.car)}/>


        </div>);
        ReactDOM.render(template, appRoot);

}



const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2');
renderIndecisionApp();



