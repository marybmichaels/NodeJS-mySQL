# Bamazon!

## Before Starting
1. Run `npm i` in the command line. 
2. Run `schema.sql` in mySQL workbench.
    This will set up your database and table. 
![](images/schema-set-up.png)

    It will also insert seed data into the table.
![](images/seed-data.png)


    Here is a visual of the data being entered. 
![](images/table-contents.png)


## Using Node in the Command Line
1. Open command line or terminal and enter "node bamazonCustomer.js to start the app 
2. A list of available products is displayed. Where prompted, enter the item id of the product you wish to purchase. 
3. After selecting the desired product, enter the quantity you wish to purchase. 
4. If there is sufficient quantity in stock, the app will update inventory in the database and calculate your order total. 
![](images/bamazon.gif)

## What Happens if there aren't enough items in stock.
5. If selected quantity is greater than available inventory, you will be notified of insufficient stock and prompted to begin your search again.
![](images/insufficientFunds.gif)