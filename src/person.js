
const isAdult = (age) => age > 18 ? true : false;

const canDrink = (age) => age > 21 ? true : false;

export default (age) => age >=64;
export {
    isAdult,
    canDrink
}