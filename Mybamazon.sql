DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("shoes","footwear", 100, 1000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("sportswear","athletics", 45, 1500);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("hats","style", 35, 1200);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("sport", "fashion", 35, 1000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("outdoors","fashion", 50, 5000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("jackets","fashion", 20, 10000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("light","electronics", 500, 1000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("books","education", 5, 10000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("tables","furniture", 50, 5000);

INSERT INTO products (item_name, department_name, price, stock_quantity)
VALUES ("chars","furniture", 40, 4000);