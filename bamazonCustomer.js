var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'bamazon'
});

connection.connect(function(err) {
  if (err) throw err;


// Show ids, names, and prices of products
connection.query('SELECT * FROM `products`', function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  for (var i=0; i<results.length; i++) {
    console.log(results[i].item_id + " " + results[i].product_name + " [" + results[i].price + "]");
  }
  // Prompt user to select a product and enter desired stock_quantity
  function displayInventory() {
    connection.query('SELECT * FROM `products`', function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      for (var i=0; i<results.length; i++) {
        console.log(results[i].item_id + " " + results[i].product_name + " [" + results[i].price + "]");
      }
      buyPrompt();
    })
    // }

  function buyPrompt() {
    inquirer.prompt( [{
      name: "item_id",
      type: "input",
      message: "Enter the number of the product you'd like to buy."
    }, {
      name: "stock_quantity",
      type: "input",
      message: "How many would you like to purchase?"
    }]).then(function(answer) {
  
      for (var i=0; i<results.length; i++) {
        if (results[i].item_id === parseInt(answer.item_id)) {
          // If order stock_quantity is too high, notify user of insufficient stock
          if (results[i].stock_quantity < parseInt(answer.stock_quantity)) {
            console.log("Insufficient stock!");
            buyPrompt();
          } else {
            // Calculate order total and remaining stock
            var total = parseFloat(answer.stock_quantity*results[i].price).toFixed(2);
            var newStock = results[i].stock_quantity - answer.stock_quantity;

            // Construct query to update stock
            var updateStock = 'UPDATE `products` SET `stock_quantity` = ' + newStock + ' WHERE `item_id` = ' + answer.item_id
            connection.query(updateStock, function(err, result) {
              if (err) {
                console.log(err);
              } else {
                console.log(`
            --------------------------------------------
            ${result.affectedRows} product has been updated
            --------------------------------------------
                `);
              }
            });

            // Notify user of successful purchase
            console.log(`
            --------------------------------------------
            You have purchased ${answer.stock_quantity} ${results[i].product_name}.
            `);
            console.log(`
            ORDER TOTAL: ${total} 
            --------------------------------------------
            `);
          }
        }
      }
    });
  }
}
displayInventory();
});
});

