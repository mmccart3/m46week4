// You need to install inquirer using the command npm install inquirer
import inquirer from "inquirer";
import chalk from 'chalk';
// object holding menu contents
let menu = {
    coffee: 3,
    tea: 2.5,
    latte: 2,
    coke: 1.5
}
// get an array of the keys from the menu object and add a go to checkout value as well
// will output: ["coffee", "tea", "latte", "coke", "-- Go To Checkout --"]
let menuChoices = Object.keys(menu);
menuChoices.push("-- Go To Checkout --");

// the CoffeeShop class that will store a customers name, order, and total cost
class CoffeeShop {
    constructor(customerName) {
        this.name = customerName
        this.order = []
        this.total = 0
    }

    // this method calcualtes the total cost of the items in the order array
    calculateTotal() {
        // console log a message using the customers name
        console.log(`Thanks, ${this.name}`)
        // the loop goes through the order array and for each item console logs the item they ordered and the price
        // the price is found by using the square bracket notation of accessing an object
        // menu.coffee is the same as doing menu["coffee"]
        for(let i = 0; i < this.order.length; i++){
            console.log( this.order[i], `£${menu[ this.order[i] ]}` )
            // add the price to the total
            this.total += menu[ this.order[i] ]
        }
        // console log the final cost after the loop has finished running
        console.log(`Your total is £${this.total}`)
    }
    // this setter adds an item to the order array
    set updateOrder(newItem) {
        this.order.push(newItem)
    }
}

// list of questions to ask user before setting up instance of CoffeeShop class
const question = [
    {
        type: "input",
        name: "getName",
        message: "What is your name?"
    }
]

// use inquirer to prompt the questions in the questions array in the terminal
const nameResponse = await inquirer.prompt(question)
// create instance of CoffeeShop class passing the name that was typed in the terminal
const customer = new CoffeeShop( nameResponse.getName )

// function to run that asks for the customers order
const askForOrder = async () => {

    // the choices store an array with all the keys in the menu object plus another value '- Go To Checkout -'
    const takeOrder = await inquirer.prompt([
        {
            type: "list",
            name: "getOrder",
            message: "What would you like to order?",
            choices: menuChoices
        }
    ])

    // check to see if they select '- Go To Checkout -' if true, then run the calculateTotal function and exit the 
    // askForOrder function. If not, then run the setter for the selected item to add it to the order array
    if(takeOrder.getOrder === "-- Go To Checkout --"){
        customer.calculateTotal()
        // return statement exits the function and stops from asking what to order
        return;
    } else {
        customer.updateOrder = takeOrder.getOrder
    }

    // runs the function again which creates a sort of infinte loop
    askForOrder()
}

// run the function once to start with
askForOrder()