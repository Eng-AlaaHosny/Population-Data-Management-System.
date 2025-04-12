Population Data Management System

 a Node.js application designed to analyze population data stored in a MySQL database. 
It provides a simple web interface to execute SQL queries and visualize the results.

## 🚀 Features
- Interactive population data queries
- Age/gender/race demographic analysis
- CSV-to-SQL data pipeline

## Prerequisites
- Node.js (v14.x or later)
- MySQL Server (v5.7 or later)
- MySQL Workbench or a similar tool to manage your MySQL database (optional)

## Installation

1. Clone the repository:
   ```
   https://github.com/Eng-AlaaHosny/Population-Data-Management-System.-

2. Import database
```
mysql -u root -p < AG_db_other.sql
```
3. Install dependencies:
  ```
npm install
```
4. Launch application
  ```
node script.js
```

 Open your web browser and navigate to http://localhost:3000.
 Enter your SQL query in the provided form and submit to see the results .

Data Import
To import data from CSV files into your MySQL database, follow these steps:

Ensure your CSV files are formatted correctly and match the table structures.
 Write a script to read the CSV files and insert data into the corresponding tables.
 Execute the script to import the data.

📊 Sample Queries 
```
SELECT age_range, SUM(population) 
FROM demographics
GROUP BY age_range;
 structure:
```
├── data/ # All CSV datasets
├── database/ # SQL scripts
├── backend/ # Node.js files
├── frontend/ # HTML/CSS/JS
└── docs/ # Documentation
```


