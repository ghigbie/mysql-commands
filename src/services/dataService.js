//this can be restructured as one big object with allof the arrays as props of the object
const tableTitles = ['General Commands', 'Table Commands', 'Crud Operations', 'String Operations', 'Refining Operations'];

const generalCommands = [
    {
        command: 'mysql-ctl cli',
        description: 'Starts the MYSQL server'
    },
    {
        command: 'SHOW DATABASES',
        description: 'Provides a list of all databases on the MYSQL server'
    },
    {
        command: 'CREATE DATABASE <database name>',
        description: 'Creates a database for use'
    },
    {
        command: 'DROP DATABASE <database name>',
        description: 'Deletes a database, so that it can no longer be used'
    },
    {
        command: 'USE <database name>',
        description: 'Selects a database to use'
    },
    {
        command: 'SELECT database()',
        description: 'Shows the database that is currently in use'
    },
    {
        command: 'SHOW TABLES',
        description: 'Shows a list of tables'
    },
    {
        command: 'SHOW COLUMNS FROM <table name>',
        description: 'Shows the contents of a table'
    },
    {
        command: 'DESC <table name>',
        description: 'Shows the contents of a table'
    },
    {
        command: 'DROP TABLE <table name>',
        description: 'Deletes a table from the database'
    }
];

const tableCommands =  [
    {
        command: 'SHOW TABLES',
        descrisption: 'Shows a list of tables'
    },
    {
        command: 'SHOW COLUMNS from <table name>',
        description: 'Shows details about a specific table'
    },
    {
        command: 'DESC <table name>',
        description: 'Shows details about a specific table (also has other uses)'
    },
    {
        command: 'CREATE TABLE <table name> (<data type> <null state>, <data type> <null state>)',
        descrisption: 'Creates table with the described characteristics'
    },
    {
        command: 'DROP TABLE <table name',
        description: 'Deletes a table from the database'
    }
    
];

const crudOperations = [
    {
        command: 'INSERT INTO <table name> (<column name 1>, <column name 2>) VALUES (<actual value 1>, <actual value 2>)',
        description: 'Inserts data into table. You can also specifiy nullibility by including "NOT NULL". A default value can also be specified by using "DEFAULT <default value>".'
    },
    {
        command: 'SELECT * FROM <table name>',
        description: 'Shows all data in a table'
    },
    {
        command: 'DELETE FROM <table name>',
        description: 'Removes all data from a table. The table is still there.'
    },
    {
        command: 'SHOW WARNINGS',
        description: 'Shows warnings generated from inserting data'
    },
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest>',
        description: 'Shows all data that matches the query value after the \'WHERE\' keyword'
    },
    {
        commnad: 'SELECT <column name> AS <display column name> FROM <table name>',
        description: 'Shows all data in the column specified and displays the data in a new column name'
    },
    {
        command: 'DELETE FROM <table name> WHERE <column name> = <value of interest>',
        description: 'Removes specific elements from selected table where the column matches the value specified'
    },
    {
        command: 'UPDATE <table name> SET <column name> = <new value> WHERE <column name> = <value of interest>',
        description: 'Changes a value to of a specific column wher that value is equal to the value of interest.'
    },
    {
        command: '',
        description: ''
    }
];

const stringOperations = [
    {
        command: 'SELECT CONCAT(<column name>, <type of separator>, <column name>,...) FROM <table name>',
        description: 'Joins data from columns together with a separator'
    },
    {
        command: 'SELECT CONCAT_WS(<type of separator, <column name>, <column name>, <clomun name>)',
        description: 'Joins data from columns together with a speartor, which is specified first'
    },
    {
        command: 'SELECT SUBSTRING(<column name>, <starting index>, <ending index>) FROM <table name>',
        description: 'Displays substrings of data from the starting index until the ending index. If no strating index is provided, then data will be display up until the ending index.'
    },
    {
        command: 'SELECT CONCAT(SUBSRINT(<column name>, <starting index>, <ending index>), ...) FROM <table name>',
        description: 'Combines CONCAT and SUBSTRING operations'
    },
    {
        command: 'SELECT REPLACE(<column name>, <string to be replaced>, <string that repalces>) FROM <table name>',
        description: 'Replaces data from a targeted column with a specified string'
    },
    {
        command: 'SELECT REVERSE(<column name>) FROM <table name>',
        description: 'Reverses a slected string'
    },
    {
        command: 'SELECT CHAR_LENG_LENGTHTH(<column name>) FROM <table name>',
        description: 'Provides the number of characters in a string'
    },
    {
        command: 'SELECT UPPER(<column name>) FROM <table name>',
        description: 'Changes the character in the selected column to be uppercase'
    },
    {
        command: 'SELECT LOWER(<column name) FROM <table name>',
        description: 'Changes the character in the selected column to be lowercase'
    }
];

const refiningOperations = [
    {
        command: 'SELECT DISTINCT <column name> FROM <table name>',
        description: 'Only selects the unique values for the column provided'
    },
    {
        command: 'SELECT DISTINCT <column name>, <column name> FROM <table name>',
        description: 'Only selects the unique values for the columns provided'
    },
    {
        command: 'SELECT <column name> FROM <table name> LIMIT BY <a number>',
        description: 'Limits the number of results produced with the query to the number provided'
    },
    {
        command: 'SELECT <column name> FROM <table name> LIMIT BY <a begining number>, <an ending number>',
        description: 'Limits the number of results produced with the query by the range provided'
    },
    {
        command: 'SELECT <column name> FROM <table name> ORDER BY <column name>',
        description: 'Orders the return values of the query in ascending order '
    },
    {
        command: 'SELECT <column name> FROM <table name> ORDER BY <column name> DESC',
        description: 'Orders the return vales of the query in descending order'
    },
    {
        command: 'SELECT <column name> FROM <table name> WHERE <column name> LIKE \'%<a value>%\'',
        description: 'Returns the values of a query that contain the value following LIKE'
    },
    {
        command: 'SELECT <column name> FROM <table name> WHERE <column name> Like \'___\'',
        description: 'Returns the values of a query whose length is equal to the number of underscores provided'
    },
    {
        command: '',
        description: ''
    },
    {
        command: '',
        description: ''
    },
    {
        command: '',
        description: ''
    }
];

const agregateFuncitons = [
    {
        command: 'SELECT COUNT(<column name>) FROM <table name>',
        description: 'Counts the number of entries that match the column of interest'
    },
    {
        command: 'SELECT COUNT(DISTICT <column name>) FROM <table name>',
        description: 'Counts the number of UNIQUE entries that match the column of interest'
    },
    {
        command: 'SELECT <column name 1>, COUNT(*) FROM books GROUP BY <column name>',
        description: 'Provides the number of items of grouped data in each row selected'
    },
    {
        command: 'SELECT MIN(<column name>) FROM <table name>',
        description: 'Provides the lowest value of the column named'
    },
    {
        command: 'SELECT MAX(<column name>) FROM <table name>',
        description: 'Provides the highest value of the column named'
    },
    {
        command: 'SELECT SUM(<column name) FROM <table name>',
        description: 'Provides a sum of all data in a given column'
    },
    {
        command: 'SELECT <column name> FROM <table name> WHERE <column name> = (SELECT MIN(<column name>) FROM <table name>)',
        description: 'Performs a subquey to find the lowest value in a column'
    },
    {
        command: 'SELECT <column name> FROM <table name> WHERE <column name> = (SELECT MAX(<column name>) FROM <table name>)',
        description: 'Performs a subquery to find the highest value in a column'
    },
    {
        command: 'SELECT AVG(<column name>) FROM <table name>',
        description: 'Provides an average of values for a column '
    }
];

const timeFunctions = [
    {
        command: 'SELECT CURDATE()',
        description: 'Provides the current date'
    },
    {
        command: 'SELECT CURTIME()',
        description: 'Provides the current time'
    },
    {
        command: 'SELECT NOW()',
        description: 'Provides the current date-time'
    },
    {
        command: 'SELECT DAY(<date> OR <datetime>) FROM, <table name>',
        description: 'Extracts the day from a DATE or DATETIEM data type'
    },
    {
        command: 'SELECT MONTH(<date> OR <datetime>) FROM, <table name>',
        description: 'Extracts the month from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT YEAR(<date> OR <datetime>) FROM, <table name>',
        description: 'Extracts the year from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT DAYNAME(<date> OR <datetime>) FROM, <table name>',
        description: 'Extracts the day name from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT DAYOFWEEK(<date> OR <datetime>) FROM, <table name>',
        description: 'Extracts the numeric representation of the day of the week from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT HOUR(<time> OR <datetime>) FROM, <table name>',
        description: 'Extracts the numeric representation of the day of the year from a TIME or DATETIME data type'
    },
    {
        command: 'SELECT MINUTE(<time> OR <datetime>) FROM, <table name>',
        description: 'Extracts the numeric representation of the day of the year from a TIME or DATETIME data type'
    },
    {
        command: 'SELECT SECOND(<time> OR <datetime>) FROM, <table name>',
        description: 'Extracts the numeric representation of the day of the year from a TIME or DATETIME data type'
    },
    {
        command: 'SELECT DATE_FORMAT(<date> OR <datetime>, \'%m/%d/%y\') FROM <table name>',
        description: 'Provides the numeric representation of the date from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT DATE_FORMAT(<date> OR <datetime>, \'%M %d, %Y\') FROM <table name>',
        description: 'Provides the written representation of the date from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT DATE_FORMAT(<date> OR <datetime>, \'%W\') FROM <table name>',
        description: 'Provides the day of the week from a DATE or DATETIME data type'
    },    
    {
        command: 'SELECT DATE_FORMAT(<datetime>, \'%m/%d/%Y at %h:%m\') FROM <table name>',
        description: 'Provides the written representation of the date and time from a DATETIME data type'
    },
    {
        command: 'SELECT DATEDIFF(NOW(), <date> OR <datetime> FROM <table name>',
        description: 'Provides an integer that represents the difference in days from now and the passed in date value'
    },
    {
        command: 'SELECT DATE_ADD(<date> OR <datetime>, INTERVAL <number> <type>) FROM <table name>',
        description: 'Adds a specified amout of time to a DATE or DATETIME data type'
    },
    {
        command: 'SELECT <date> OR <datetime> + INTERVAL <number> <type> FROM <table name>',
        escription: 'Adds a specified amout of time to a DATE or DATETIME data type. Just as above'
    },    
    {
        command: 'SELECT DATE_SUB(<date> OR <datetime>, INTERVAL <number> <type>) FROM <table name>',
        description: 'Subtracts a specified amout of time from a DATE or DATETIME data type'
    },
    {
        command: 'SELECT <date> OR <datetime> - INTERVAL <number> <type> FROM <table name>',
        description: 'Subtracts a specified amout of time from a DATE or DATETIME data type. Just as above'
    },
];

const logicalOperators = [
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest>',
        description: 'Provides all items equal to the value of interest'
    },
    {
        command: 'SELECT * FROM <table name> WHERE <column name> != <value of interest>',
        description: 'Provides all items not equal to the value of interest'
    },
    {
        command: 'SELECT * FROM <table name> WHERE <column name> LIKE \'%<value of interest>%\'',
        description: 'Provides all items that contain the value of interest'
    },    
    {
        command: 'SELECT * FROM <table name> WHERE <column name> NOT LIKE \'%<value of interest>%\'',
        description: 'Provides all items that DOES NOT contain the value of interest'
    },    
    {
        command: 'SELECT * FROM <table name> WHERE <column name> > <value of interest>',
        description: 'Provides all items that are greater than the value of interest'
    },    
    {
        command: 'SELECT * FROM <table name> WHERE <column name> >= <value of interest>',
        description: 'Provides all items that are greater than or equal to the value of interest'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> < <value of interest>',
        description: 'Provides all items that are less than the value of interest'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> <= <value of interest>',
        description: 'Provides all items that are less than or equal to the value of interest'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest> && <column name2> = <value of interest>',
        description: 'Provides all items that match the TWO (or more) conditions'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest> AND <column name2> = <value of interest>',
        description: 'Provides all items that match the TWO (or more) conditions'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest> || <column name2> = <value of interest>',
        description: 'Provides all items that match ONE of the TWO conditions'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest> OR <column name2> = <value of interest>',
        description: 'Provides all items that match ONE of the TWO conditions'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> BETWEEN <value of interest> AND <value of interest>',
        description: 'Provides all items between two specified values'
    },     
    {
        command: 'SELECT * FROM <table name> WHERE <column name> NOT BETWEEN <value of interest> AND <value of interest>',
        description: 'Provides all items that are NOT between two specified values'
    }
    
    
];

const tableData = {
    tableTitles,
    generalCommands,
    tableCommands,
    crudOperations, 
    stringOperations,
    refiningOperations, 
    agregateFuncitons,
    timeFunctions,
    logicalOperators
};

export default tableData;