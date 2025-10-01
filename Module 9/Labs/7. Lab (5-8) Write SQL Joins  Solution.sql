-- This script contains demo code for Relational Database and SQL course
-- Author Sow Jin Sze @Copyright NUS

--  INNER joins
--  Section 1 : Inner Joins



-- Implicit
SELECT 
	SalesLT.Product.Name AS ProductName, 
	SalesLT.Product.Color AS ProductColor,
	SalesLT.ProductCategory.Name AS Category
-- Join Product and product category tables with Product category key
FROM SalesLT.Product   -- LEFT TABLE
INNER JOIN SalesLT.ProductCategory -- RIGHT TABLE
ON SalesLT.Product.ProductSubCategoryID = SalesLT.ProductCategory.ProductCategoryID;  -- JOIN KEY



		
-- Explicit
SELECT SalesLT.Product.Name AS ProductName, SalesLT.ProductCategory.Name AS Category
FROM SalesLT.Product
JOIN SalesLT.ProductCategory
       ON SalesLT.Product.ProductSubCategoryID = SalesLT.ProductCategory.ProductCategoryID;

-- Assign alias to the tables
SELECT 
	p.Name AS ProductName, 
	c.Name AS Category
FROM SalesLT.Product AS p
	JOIN SalesLT.ProductCategory AS c
		ON p.ProductSubCategoryID = c.ProductCategoryID;


-- Multiple joins
SELECT 
	oh.OrderDate, 
	oh.SalesOrderNumber, 
	p.Name AS ProductName, 
	od.OrderQty, 
	od.UnitPrice, 
	od.LineTotal
-- Join Tables SalesLT.SalesOrderHeader & SalesLT.SalesOrderDetail 
FROM SalesLT.SalesOrderHeader AS oh
	JOIN SalesLT.SalesOrderDetail AS od
		ON od.SalesOrderID = oh.SalesOrderID
	JOIN SalesLT.Product AS p
		ON od.ProductID = p.ProductID
-- Sort by order date followed by orderID ...
-- WHERE 
ORDER BY oh.OrderDate, oh.SalesOrderID, od.SalesOrderDetailID;

-- Section 2 OUTER Joins
-- OUTER JOINS

-- Left outer join
SELECT c.AccountNumber, c.CustomerType, oh.SalesOrderNumber
FROM SalesLT.Customer AS c
LEFT OUTER JOIN SalesLT.SalesOrderHeader AS oh
	ON c.CustomerID = oh.CustomerID
ORDER BY c.CustomerID;

-- Outer keyword is optional
SELECT c.AccountNumber, c.CustomerType, oh.SalesOrderNumber
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.SalesOrderHeader AS oh
ON c.CustomerID = oh.CustomerID;

-- identifies non-matching rows
SELECT c.AccountNumber, c.CustomerType, oh.SalesOrderNumber
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.SalesOrderHeader AS oh
    ON c.CustomerID = oh.CustomerID
WHERE oh.SalesOrderNumber IS NULL 
ORDER BY c.CustomerID;

-- multiple joins with 3 tables
SELECT p.Name As ProductName, oh.SalesOrderNumber
FROM SalesLT.Product AS p
LEFT JOIN SalesLT.SalesOrderDetail AS od
    ON p.ProductID = od.ProductID
LEFT JOIN SalesLT.SalesOrderHeader AS oh
    ON od.SalesOrderID = oh.SalesOrderID
ORDER BY p.ProductID;

-- multiple joins and add an inner join to return category information
SELECT p.Name As ProductName, c.Name AS Category, oh.SalesOrderNumber
FROM SalesLT.Product AS p
LEFT OUTER JOIN SalesLT.SalesOrderDetail AS od
    ON p.ProductID = od.ProductID
LEFT OUTER JOIN SalesLT.SalesOrderHeader AS oh
    ON od.SalesOrderID = oh.SalesOrderID
INNER JOIN SalesLT.ProductCategory AS c
    ON p.ProductCategoryID = c.ProductCategoryID
ORDER BY p.ProductID;


-- CROSS JOIN

-- Every product/city combination
SELECT p.Name, c.TerritoryID, c.CustomerType
FROM SalesLT.Product AS p
CROSS JOIN SalesLT.Customer AS c;



-- SELF JOIN

SELECT pcat.Name AS ParentCategory, cat.Name AS SubCategory
FROM SalesLT.ProductCategory AS cat
JOIN SalesLT.ProductCategory pcat
    ON cat.ParentProductCategoryID = pcat.ProductCategoryID
ORDER BY ParentCategory, SubCategory;


SELECT 
	c.CompanyName, 
	c.FirstName, 
	c.LastName,
	oh.SalesOrderID, 
	oh.TotalDue
FROM SalesLT.Customer AS c
	LEFT JOIN SalesLT.SalesOrderHeader AS oh
	ON c.CustomerID = oh.CustomerID
ORDER BY oh.SalesOrderID DESC;




SELECT c.CompanyName, c.FirstName, c.LastName, c.Phone, ca.AddressID
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.CustomerAddress AS ca
ON c.CustomerID = ca.CustomerID
WHERE ca.AddressID IS NULL;





-- -----------
-- Customer Orders
SELECT c.AccountNumber, oh.SalesOrderID, oh.TotalDue
FROM SalesLT.Customer AS c
JOIN SalesLT.SalesOrderHeader AS oh
	ON oh.CustomerID = c.CustomerID;

 
SELECT c.AccountNumber,
       -- a.AddressLine1 AS Address,
        CONCAT(a.AddressLine1 , ', ' , IFNULL(a.AddressLine2,'')) AS Address,
		oh.SalesOrderID,
        a.City,
        a.PostalCode,
       oh.TotalDue
       -- oh.CustomerID,
       -- ca.AddressID
FROM SalesLT.Customer AS c
JOIN SalesLT.SalesOrderHeader AS oh
    ON oh.CustomerID = c.CustomerID
JOIN SalesLT.CustomerAddress AS ca
    ON c.CustomerID = ca.CustomerID       
JOIN SalesLT.Address AS a
    ON ca.AddressID = a.AddressID;








-- Challenge 2

SELECT *
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.CustomerAddress AS ca
    ON c.CustomerID = ca.CustomerID
WHERE ca.AddressID IS NULL;

-- Retrieve a list of all customers and their orders


    
       
SELECT 
	 c.AccountNumber,
       oh.PurchaseOrderNumber,
       oh.SalesOrderID,
       ROUND(oh.TotalDue - oh.Freight - oh.TaxAmt) AS TaxFreightAmt, 
       oh.TotalDue,
	   DATE_FORMAT(oh.OrderDate, '%Y-%m-%d') AS OrderDate     
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.SalesOrderHeader AS oh
    ON c.CustomerID = oh.CustomerID
WHERE oh.SalesOrderID IS NOT NULL
ORDER BY ShipDate DESC;

SELECT c.CompanyName, c.FirstName, c.LastName,
       oh.SalesOrderID, oh.TotalDue
FROM SalesLT.Customer AS c
LEFT JOIN SalesLT.SalesOrderHeader AS oh
    ON c.CustomerID = oh.CustomerID
ORDER BY oh.SalesOrderID DESC;






