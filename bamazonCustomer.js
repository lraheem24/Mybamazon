var inquirer = require("inquirer");
var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

var product = [];

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    marketProducts();
});

// function which prompts the user for what action they should take
//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.

function start() {
    inquirer
        .prompt([{
                productId: "product ID",
                type: "rawlist",
                name: "chooseID",
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < product.length; i++) {
                        choiceArray.push(product[i].item_name);
                    }
                    return choiceArray;
                },
                message: "Enter ID of the product you would like to purchase"
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter units of product for purchase"
            }

        ])
        .then(function(answers) {
            console.log(answers);
            var orderQuantity = parseInt(answers.quantity);
            var orderID = answers.chooseID;

            for (var j = 0; j < product.length; j++) {
                if (orderID === product[j].item_name) {
                    if (product[j].stock_quantity < orderQuantity) {
                        console.log("Insufficient Quantity!")
                        start();
                    } else {
                        updateInventory(product[j].item_name, product[j].stock_quantity - orderQuantity)
                    };
                }
            }
        })
        .catch(function(err) {
            console.log(err);
        })
}
// function to handle posting new items up for auction
function marketProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        product = results;
        console.log("name: ", "product id: ", "price: ", "quantity: ");
        for (var i = 0; i < results.length; i++) {
            var current_product = results[i];
            console.log(current_product.item_name + "  " + current_product.item_id + "  " + current_product.price + "  " + current_product.stock_quantity)
        }
        start();

    })
}

function updateInventory(item_name, updatedQuantity) {
    connection.query('UPDATE `products` SET `stock_quantity` = "' + updatedQuantity + '" WHERE `item_name` = "' + item_name + '"', function(err, results) {
        var total = 0
        console.log(product)
        for (var i = 0; i < product.length; i++) {
            if (item_name === product[i].item_name) {
                console.log(product[i]) total += price * quantity;
            }
        }
        // total += price * quantity;
        console.log("Total: " + total);
        start();
    })


}