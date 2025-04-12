Population Data Management System

 a Node.js application designed to analyze population data stored in a MySQL database. 
It provides a simple web interface to execute SQL queries and visualize the results.


This project requires:

Node.js and MySQL. 

It uses Express for the backend and MySQL for the database.

## Features

- Connects to a MySQL database to execute SQL queries.
- Provides a simple web interface to input and execute queries.
- Displays query results in a table format.

## Prerequisites

- Node.js (v14.x or later)
- MySQL Server (v5.7 or later)
- MySQL Workbench or a similar tool to manage your MySQL database (optional)

## Installation

1. Clone the repository:
   ```
   https://github.com/Eng-AlaaHosny/Population-Data-Management-System.-

  Install dependencies:
  ```
npm install
```


Set up your MySQL database and import the schema:

  Create a new database named ag.
  Import the schema from AG_db_other.sql using MySQL Workbench or the command line.

Update the database connection settings in script.js if necessary.

Usage:
Start the server:
```
npm start
```
 Open your web browser and navigate to http://localhost:3000.
 Enter your SQL query in the provided form and submit to see the results.

Data Import
To import data from CSV files into your MySQL database, follow these steps:

Ensure your CSV files are formatted correctly and match the table structures.
 Write a script to read the CSV files and insert data into the corresponding tables.
 Execute the script to import the data.




