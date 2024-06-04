#! /usr/bin/env node
console.log("\n***Number Guessing Game***")
console.log("__________________________\n")
import inquirer from "inquirer";
const compno=Math.floor(Math.random()*10)
const answergame=await inquirer.prompt([
   {
    name:"Userno",
    message: "Please Guess any Number from 0 to 10:",
    type: "number",
   } 
])
   
if (answergame.Userno===compno){
    console.log("consgratulation, You Win the game")
}else {
    console.log( `you lost the game. Right number is ${compno} \n `)
    console.log("-------- Good luck for next time-------\n")
    console.log("***GAME END***")
}
