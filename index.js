// how to use this for objects
const manager = {
    age:25,
    name:"ali",
    skill:"software Engineer",
};
console.log(manager.name)
const employ = {
    age:20,
    name:"amir",
    skill:"computer Engineer",
};
function yourAge(){
    console.log(`my age is ${this.age}`)
};
manager.yourAge = yourAge;
employ.yourAge = yourAge;
manager.yourAge();
employ.yourAge();
// getters and setters
console.log("  this is getters and setters section");
const game = {
    name:"league of legends",
    get type(){
        return this.name + "  is  MOBA"
    },
    age:2009,
    set ageNumber(x){
         this.age=x;
    },
}
game.ageNumber =  2022 - game.age 
console.log(game.age)
console.log(game.type)
// getters and setters second way
console.log(  "   Second way of useing getters and setters");
let firstType = "mafia";
const gameThird = {
    name:"Among us",
    partyNumber:15,
};
Object.defineProperties(gameThird,{
    "type" : { get: function() {return firstType;} }

});
console.log(gameThird.type);
//deleting propertiy
console.log("  this is how to delete a property of objects");
const gameSecond = {
    name:"Starcraft 2",
    type:"MOBA",
    age:2009,
};

delete gameSecond.type;
console.log('type' in gameSecond)

