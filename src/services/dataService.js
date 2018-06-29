//this can be restructured as one big object with allof the arrays as props of the object
const tableTitles = ['General Commands', 'Table Commands', 'Crud Operations'];

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
        command: 'SHOW WARNINGS',
        description: 'Shows warnings generated from inserting data'
    },
    {
        command: 'SELECT * FROM <table name> WHERE <column name> = <value of interest>',
        description: 'Shows all data that matches the query value after the \'WHERE\' keyword'
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

const tableData = {
    tableTitles: tableTitles,
    generalCommands: generalCommands,
    tableCommands: tableCommands,
    crudOperations: crudOperations
};

export default tableData;