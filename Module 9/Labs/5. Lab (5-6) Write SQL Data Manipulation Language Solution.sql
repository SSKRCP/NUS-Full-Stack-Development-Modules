-- This script contains your code for Module 1 of the SQL course


-- BASIC QUERIES
-- Section 1 Use SELECT queries to retrieve data

-- Select all columns
SELECT * FROM SalesLT.Product;

-- Select specific columns
SELECT Name, StandardCost, ListPrice
FROM SalesLT.Product;

-- Select an expression
SELECT Name, ListPrice - StandardCost
FROM SalesLT.Product;

-- Apply an alias
SELECT Name AS ProductName, ListPrice - StandardCost as Markup
FROM SalesLT.Product
Order by Markup desc;

-- Select two expressions with an alias
SELECT ProductNumber, 
       Color, 
	   Size, 
       CONCAT(Color , ', ' , Size) AS Color_Size, 
	   ListPrice - StandardCost AS ProductDetails
FROM SalesLT.Product;


SELECT ProductNumber, Color, Size, Concat(Color , ', ' , Size) , ListPrice - StandardCost 
FROM SalesLT.Product;




-- Section 2 Work with Data Types

-- Try to combine incompatible data types (results in error)

-- Use cast
SELECT CONCAT(CAST(ProductID AS char(5)), ': ' , Name) AS ProductName
FROM SalesLT.Product; 

-- convert dates
SELECT SellStartDate,
       DATE_FORMAT(SellStartDate, '%Y-%m-%d %H:%i:%s') AS ConvertedDate,
       DATE_FORMAT(SellStartDate, '%Y-%m-%dT%H:%i:%s') AS ISO8601FormatDate
FROM SalesLT.Product;


-- (results in error) as some Size values are not numeric 
SELECT Name, CAST(Size AS SIGNED) AS NumericSize
            FROM SalesLT.Product; 

-- use TRY_CAST

SELECT Name,
       CASE WHEN Size REGEXP '^[0-9]+$' THEN CAST(Size AS UNSIGNED)
            ELSE NULL
       END AS NumericSize
FROM SalesLT.Product;


-- Section 3 Handle Nulls
-- View SalesLT.Product Table
SELECT NAME, Size FROM SalesLT.Product;

SELECT Name, IFNULL(CAST(Size AS SIGNED), 0) AS NumericSize
FROM SalesLT.Product;


-- use ISNULL on color and size
SELECT ProductNumber, CONCAT(IFNULL(Color, '') , ', ' , IFNULL(Size, '')) AS ProductDetails
FROM SalesLT.Product;

-- replaces 'Multi-colored' products with null for singlecolor
SELECT Name, IFNULL(Color, 'Multi') AS SingleColor
FROM SalesLT.Product;

-- use COALESCE
SELECT Name, COALESCE(SellEndDate, SellStartDate) AS StatusLastUpdated
FROM SalesLT.Product;

-- CASE statement
-- simple case expression
SELECT Name,
    CASE
        WHEN SellEndDate IS NULL THEN 'Currently for sale'
        ELSE 'No longer available'
    END AS SalesStatus
FROM SalesLT.Product;

-- searched case expression 
SELECT Name,
    CASE Size
        WHEN 'S' THEN '20'
        WHEN 'L' THEN 'Large'
        WHEN 'XL' THEN 'Extra-Large'
        ELSE IFNULL(Size, 'n/a')
    END AS ProductSize
      FROM SalesLT.Product;

SELECT Title, FirstName, MiddleName, LastName, Suffix
FROM SalesLT.Customer;

SELECT Salesperson, ISNULL(Title,'') + ' ' + LastName AS CustomerName, Phone
FROM SalesLT.Customer;

SELECT 
	CONCAT(IFNULL(CustomerID, '') , ': ' , IFNULL(AccountNumber, '')) AS Customer_Account,
    CASE TerritoryID
        WHEN 1 THEN 'Colorado'
        WHEN 2 THEN 'Florida'
        WHEN 3 THEN 'Georgia'
        WHEN 4 THEN 'Arizona'
        WHEN 5 THEN 'Kansas'
        WHEN 6 THEN 'Maine'
        ELSE IFNULL(TerritoryID, 'Others')
    END AS SalesRegion
FROM SalesLT.customer;


SELECT CONCAT ('SO', SalesOrderID , ' (', RevisionNumber, ')') AS OrderRevision,
DATE_FORMAT(OrderDate, '%Y-%m-%d') AS OrderDate
       FROM SalesLT.SalesOrderHeader;


ALTER TABLE `saleslt`.`salesorderheader` 
CHANGE COLUMN `ShipDate` `ShipDate` DATETIME NULL ;

UPDATE SalesLT.SalesOrderHeader
SET ShipDate = NULL
       WHERE SalesOrderID < 43661;


SELECT SalesOrderID, OrderDate,
    CASE
        WHEN ShipDate IS NULL THEN 'Awaiting Shipment'
        ELSE 'Shipped'
    END AS ShippingStatus
FROM SalesLT.SalesOrderHeader;

