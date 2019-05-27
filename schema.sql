DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE IF NOT EXISTS products(
	item_id INT AUTO_INCREMENT,
    product_name VARCHAR(100),
	department_name VARCHAR(100),
    price INT,
    stock_quantity INT,
    primary key(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('echo dot', 'electronics', 49.99, 10000);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('tv', 'electronics', 400.87, 7890);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('eames lounge chair', 'furniture', 5000.00, 100);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('eames fiberglass chair', 'furniture', 500.00, 200);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('nintendo switch', 'gaming', 300.00, 800);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('wine glasses', 'housewares', 25.00, 250000);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('bookshelf', 'furniture', 149.99, 5000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('toothpaste', 'self care', 5.00, 10000000);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('deoderant', 'self care', 3.50, 10570000);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('htc vive', 'gaming', 525.00, 10890);
    
INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('decorative rug', 'housewares', 169.99, 2670);

INSERT INTO products(product_name, department_name, price, stock_quantity)
	VALUES('fridge', 'appliance', 1250.00, 4579);

SELECT * FROM products;