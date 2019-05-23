//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/


let count = 0;
let dice2 = 0;
let points = 50;
let doubles = 0;
let message = '';
let disabledDoubleBtn = false;
let disableDoubleBtnCT = 1;
let disabledNotDoubleBtn = false;
let disableNotDoubleBtnCT = 1;
const maxBtnCount = 5;

const addOne = () =>{
    count++;
    renderCounterApp();
}
const minusOne = () =>{
    count--;
    renderCounterApp();
}
const reset = () =>{
    count=0;
    renderCounterApp();
}

const rollADouble = () =>{
    disabledNotDoubleBtn = false;
    disableNotDoubleBtnCT = 1;
    count = Math.floor(Math.random() * 6) + 1
    dice2 = Math.floor(Math.random() * 6) + 1
    if(count === dice2) {
        message = "NICE JOB!!!! IT IS A DOUBLE!!! You just EARNED +" + ((count + dice2)*2) + " points"
        points = points + ((count + dice2)*2)
    } else{
        message = "You just lost 3 points"
        points = points -3;     
    }
    if(disableDoubleBtnCT < maxBtnCount){
        disableDoubleBtnCT++;
    }else{
        disabledDoubleBtn = true;
    }
  
    renderCounterApp();
    lose(points);
    win(points);
};

const notRollADouble = () =>{
    disableDoubleBtnCT = 1;
    disabledDoubleBtn = false;
    count = Math.floor(Math.random() * 6) + 1
    dice2 = Math.floor(Math.random() * 6) + 1
    if(count === dice2) {
        message = "OH NO!! IT IS A DOUBLE!! You just LOST -" + ((count + dice2)*2) + " points"
        points = points - ((count + dice2*2))
    } else{
        let addedPoints = Math.floor(Math.random() * 3) + 1
        points = points + addedPoints
        message = "You just gained " + addedPoints +" points"
    }
    if(disableNotDoubleBtnCT < maxBtnCount && disabledNotDoubleBtn == false){
        disableNotDoubleBtnCT++;
    }else{
        disabledNotDoubleBtn = true;
    }
    renderCounterApp();
    lose(points);
    win(points);
};

const lose = (points) =>{
    if (points <= 0){
        renderCounterAppLose();
    }
}

const win = (points) => {
    if (points >= 100) {
        renderCounterAppWin();
    }
}


const renderBtns = () => {
    if (disabledDoubleBtn){
        return <p>I bet I will: <button onClick={rollADouble} disabled>Roll a Double</button><button onClick={notRollADouble}>Not Roll a Double</button></p>
    } else if(disabledNotDoubleBtn){
        return <p>I bet I will: <button onClick={rollADouble}>Roll a Double</button><button onClick={notRollADouble} disabled>Not Roll a Double</button></p>
    } else{
        return <p>I bet I will: <button onClick={rollADouble}>Roll a Double</button><button onClick={notRollADouble}>Not Roll a Double</button></p>
    }
}

const renderCounterApp = () => {

    const template2 = (
        <div>
        
        {renderBtns()}
        {disabledDoubleBtn && <h3>You have hit your max consequtive bets on Roll a Double. Click Not Roll a Double to Continue</h3>}
        {disabledNotDoubleBtn && <h3>You have hit your max consequtive bets on Not Roll a Double. Click Roll a Double to Continue</h3>}
        {message && <h3>{message}</h3>} 
        <div id="dieContainer">
        {count !== 0 && <div id='die1'>{count}</div>}
        {count !== 0 && <div id='die2'>{dice2}</div>}
        </div>   
            <h1>Points: {points}</h1>
            
        </div>
        );
        
        ReactDOM.render(template2, appRoot2);

}

const resetVariables = () => {
    count = 0;
    dice2 = 0;
    points = 50;
    doubles = 0;
    message = '';
    disabledDoubleBtn = false;
    disableDoubleBtnCT = 1;
    disabledNotDoubleBtn = false;
    disableNotDoubleBtnCT = 1;
}

const renderCounterAppLose = () => {
    const template2 = (
        <div>
            <h1>YOU LOSE BETTER LUCK NEXT TIME</h1>
            <h1>Points: {points}</h1>
            <button onClick={reset}>Replay</button>
        </div>
        );
        resetVariables();
        ReactDOM.render(template2, appRoot2);
}

const renderCounterAppWin = () => {

    const template2 = (
        <div>
            <h1>YOU WIN!!!!!!</h1>
            <h1>Points: {points}</h1>
            <button onClick={reset}>Replay</button>
        </div>
        );
        resetVariables();
        ReactDOM.render(template2, appRoot2);

}



const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2');
renderCounterApp();


