//sudo npm install -g babel-cli@6.24.1
//yarn init
//yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
/*babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
change src/app.js*/

class Person {
    constructor(name='Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
     return `Hi my name is ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
       }
}


class Student extends Person{
    constructor(name,age,major='undecided'){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            return    description += `My major is ${this.major}`
        }
        
    }

}


class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHome(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHome()){
            return greeting += `. My home location is: ${this.homeLocation}`
        }
        return greeting;

    }
}

const me = new Traveler('Jared Cannon',28);
console.log(me);